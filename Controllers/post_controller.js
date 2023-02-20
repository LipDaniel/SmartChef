const post = require('../Models/entities/post');
const postDao = require('../models/dao/postdao');
const categoryDao = require('../models/dao/categorydao');
const Setting = require('./Setting');
const path = require('path');
const mv = require('mv');

module.exports = class post_controller {

    addPost(req, res, next) {
        const ext_name = path.extname(req.files.thumbnail.name);
        const image_name = Date.now() + ext_name;
        const image_path = '/upload/' + image_name;
        req.files.thumbnail.mv("C:/xampp/htdocs/SmartChef/public/upload/" + image_name);
        
        var title = req.body.title;
        var content = req.body.content;
        var cateid = req.body.category;
        var thumbnail = image_path;
        var created_at = new Setting().getCurrentDate();
        
        if (title != null && content != null){
            var postItem = new post(title, content, cateid, thumbnail, created_at);
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