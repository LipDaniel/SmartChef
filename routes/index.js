var express = require('express');
const home_controller = require('../Controllers/home_controller');

var router = express.Router();

/* GET home page. */
router.get('/', new home_controller().getHomePage);

module.exports = router;
