var express = require('express');
const post_controller = require('../Controllers/post_controller');
var router = express.Router();

/* GET home page. */
router.get('/',  new post_controller().getUserPost);
router.get('/:id', new post_controller().getPostFromId)
router.post('/:id/comments', new post_controller().postComments);
module.exports = router;
