var express = require('express');
const product_controller = require('../Controllers/product_controller');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/dashboard');
});
router.get('/product', function(req, res, next) {
  res.render('admin/product');
});
router.post('/add-product',new product_controller().addProduct)

module.exports = router;
