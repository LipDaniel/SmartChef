const customer = require('../Models/entities/customer');
const customerDao = require('../models/dao/customerdao');
const bcrypt = require("bcrypt");        

module.exports = class login_controller {

    register(req, res, next){
        var email = req.body.email;
        var name = req.body.name;
        var phone = req.body.phone;
        var password = req.body.pwd;

        var salt = bcrypt.genSaltSync(10);
        var bcryptpass = bcrypt.hashSync(password, salt);

        var customerItem = new customer(email, name, bcryptpass, phone);
        var Dao = new customerDao();
        Dao.Create(customerItem);
        res.redirect('/login');
    }

    logout(req,res){
        req.session.destroy();
        res.redirect('/');
    }

    login(req, res){
        let user = req.body.phone;
        let pwd = req.body.password;

        var salt = bcrypt.genSaltSync(10);
        var bcryptpass = bcrypt.hashSync(pwd, salt);

        var Dao = new customerDao();
        Dao.checkLogin(user, (err, rows) => {
            if(err){
                console.log(err);
                res.redirect('back');
            }
            else{
                var kq = false;
                rows.recordset.forEach(element => {
                    var kq = bcrypt.compareSync(pwd, element.password);
                    if(kq){
                        var sess = req.session;  //initialize session variable
                        sess.isLoggedIn = true;
                        sess.email = element.email;
                        sess.username = element.firstname;
                        sess.phone = element.phone; 
                        sess.password = element.password;
                        sess.level = element.rank_id;
                        res.redirect('/')
                    }else{
                        res.redirect('back')
                    }
                });

            }
        })
    }
}
