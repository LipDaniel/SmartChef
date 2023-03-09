const PostDao = require('../models/dao/postdao');
const productDao = require('../models/dao/productdao');
const billDao = require('../models/dao/billdao');
const Bill = require('../models/entities/bill');
const faqDao = require('../models/dao/faqdao');
const cateDao = require('../models/dao/categorydao');

module.exports = class home_controller {
    getHomePage(req, res, next){
        var product = new productDao();
        var post = new PostDao();
        var faq = new faqDao();
        var cate = new cateDao();
        const obj = new Object();
        post.All8((err, rs) => {
            if(err) console.log(err);
            else{
                obj.postData = rs.recordset
                product.All((err, rows) => {
                    if(err) console.log(err); 
                    else{
                        obj.productData = rows.recordset
                        faq.All((err, rows) => {
                            if(err) console.log(err)
                            else{
                                obj.faqData = rows.recordset
                                cate.All((err, rows) => {
                                    if (err) console.log(err);
                                    else{
                                        obj.cateData = rows.recordset
                                        post.All((err, rows) => {
                                            if (err) console.log(err);
                                            else{
                                                obj.allPost = rows.recordset
                                                res.render('user/home', { obj: obj })
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    } 
                })
            }
        })
    }
    getShoppingCart(req, res, next){
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
    postShoppingCart(req,res,next){
        var customer_id = req.body.customerid;
        var product_id = req.body.productid;
        var total = req.body.total;
        var item = new Bill(customer_id, product_id, total);
        var dao = new billDao();
        dao.addBillAndupdate(item);
        req.session.level = product_id;
        res.redirect('/');
    }
}
