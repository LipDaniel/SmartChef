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
        var productItem = new product(name, price, cakere, asianre, eurore, globalre, message);
        var dao = new productDao();
        dao.Create(productItem);
        res.redirect('/admin/product')
    }
}
