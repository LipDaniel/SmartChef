const PostDao = require('../models/dao/postdao');
const productDao = require('../models/dao/productdao');

module.exports = class home_controller {
    getHomePage(req, res, next){
        var product = new productDao();
        var post = new PostDao();
        const obj = new Object();
        post.All8((err, rs) => {
            if(err) console.log(err);
            else{
                obj.postData = rs.recordset
                product.All((err, rows) => {
                    if(err) console.log(err); 
                    else{
                        obj.productData = rows.recordset
                        res.render('user/home', { obj: obj })
                    } 
                })
            }
        })
    }
    getShoppingCard(req, res, next){
        var id = req.params.id;
        var dao = new productDao();
        dao.getProductFromId(id, (err, rows) => {
            if(err) console.log(err)
            else{
                if(req.session.isLoggedIn){
                    res.render('user/shoppingcart', {data: rows.recordset});
                }else{
                    res.redirect('/login');
                }
            }
        })
    }
}
