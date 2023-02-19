const product = require('../Models/entities/product');
const productDao = require('../models/dao/productdao');

module.exports = class product_controller {
    addProduct(req, res, next) {
        var name = req.body.name;
        var price = req.body.price;
        var cakere = req.body.cakere == 'on' ? '1' : '0' ;
        var asianre = req.body.asianre == 'on' ? '1' : '0';
        var eurore = req.body.eurore == 'on' ? '1' : '0';
        var globalre = req.body.globalre == 'on' ? '1' : '0';
        var message = req.body.message == 'on' ? '1' : '0';
        if (name != null && price != null){
            var productItem = new product(name, price, cakere, asianre, eurore, globalre, message);
            var dao = new productDao();
            dao.Create(productItem);
            dao.All((err, rows) => {
                if(err){
                    console.log(err)
                }else{
                    res.redirect('back');
                }
            })
        }else{
            res.redirect('/admin/product')
        }
    }

    getProduct(req, res, next) {
        var dao = new productDao();
        dao.All((err, rows) => {
            if (err) { 
                console.log(err) 
            }
            else {
                rows.recordset.price = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(1000)
                res.render('admin/product', { dt: rows.recordset })
            }
        });
    }
}
