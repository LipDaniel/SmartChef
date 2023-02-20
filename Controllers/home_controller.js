const productDao = require('../models/dao/productdao');

module.exports = class home_controller {
    getHomePage(req, res, next){
        var product = new productDao();
        var productData;
        product.All((err, rows) => {
            if(err) console.log(err); 
            else{
                res.render('user/home', { dt: rows.recordset })
            } 
        })
    }
}
