const PostDao = require('../models/dao/postdao');
const productDao = require('../models/dao/productdao');

module.exports = class home_controller {
    getHomePage(req, res, next){
        var product = new productDao();
        var post = new PostDao();
        const obj = new Object();
        post.All8((err, rows) => {
            if(err) console.log(err);
            else{
                obj.postData = rows.recordset
            }
        })
        product.All((err, rows) => {
            if(err) console.log(err); 
            else{
                obj.productData = rows.recordset
                res.render('user/home', { obj: obj })
            } 
        })
    }
}
