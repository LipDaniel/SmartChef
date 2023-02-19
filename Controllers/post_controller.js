const post = require('../Models/entities/post');
const postDao = require('../models/dao/postdao');
const categoryDao = require('../models/dao/categorydao');

module.exports = class post_controller {
    addPost(req, res, next) {
        console.log(req.body.files);
        var title = req.body.title;
        var content = req.body.content;
        var cateid = req.body.category;
        if (title != null && content != null){
            var postItem = new post(title, content, cateid);
            var dao = new postDao();
            dao.Create(postItem);
            res.redirect('back');
        }else{
            res.redirect('/admin/post')
        }
    }

    getPost(req, res, next) {
        var dao = new postDao();
        dao.All((err, rows) => {
            if (err) { 
                console.log(err) 
            }
            else {
                res.render('admin/allpost', { dt: rows.recordset })
            }
        });
    }
    getCategory(req, res, next) {
        var dao = new categoryDao();
        dao.All((err, rows) => {
            if (err) {
                console.log(err)
            }else{
                res.render('admin/post', {dt: rows.recordset})
            }
        })
    }
}