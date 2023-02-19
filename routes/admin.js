var express = require('express');
const product_controller = require('../Controllers/product_controller');
const post_controller = require('../Controllers/post_controller');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/dashboard');
});
router.get('/allpost', function (req, res, next) {
  res.render('admin/allpost');
})
router.get('/post', new post_controller().getCategory) 
router.post('/add-post', new post_controller().addPost)
router.get('/product', new product_controller().getProduct);
router.post('/add-product',new product_controller().addProduct)

module.exports = router;
