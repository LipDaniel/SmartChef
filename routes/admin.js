var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/dashboard');
});
router.get('/product', function(req, res, next) {
  res.render('admin/product');
});
module.exports = router;
