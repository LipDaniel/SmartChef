const post = require('../Models/entities/post');
const comment = require('../Models/entities/comment');
const postDao = require('../models/dao/postdao');
const commentDao = require('../models/dao/commentdao');
const categoryDao = require('../models/dao/categorydao');
const Setting = require('./Setting');
const path = require('path');

module.exports = class post_controller {

    addPost(req, res, next) {
        const ext_name = path.extname(req.files.thumbnail.name);
        const image_name = Date.now() + ext_name;
        req.files.thumbnail.mv("C:/xampp/htdocs/SmartChef/public/upload/" + image_name);
        
        var title = req.body.title;
        var content = req.body.content;
        var cateid = req.body.category;
        var thumbnail = image_name;
        var created_at = new Setting().getCurrentDate();
        
        if (title != null && content != null){
            var postItem = new post(title, content, cateid, thumbnail, created_at);
            var dao = new postDao();
            dao.Create(postItem);
            res.redirect('/admin/post');
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

    getEditPost(req, res, next){
        var post = new postDao();
        var cate = new categoryDao();
        var cateData;
        var postData;
        cate.All((err, rs) => {
            if (err) console.log(err)
            else{
                cateData = rs.recordset
                post.GetPostFromId(req.params.id, (err, rows) => {
                    if (err) console.log(err) 
                    else {
                        postData = rows.recordset
                        res.render('admin/editpost', {cateData: cateData, postData: postData})
                    }
                });
            }
        });
    }
    editPost(req, res, next){

        if(req.files != null){
            const ext_name = path.extname(req.files.thumbnail.name);
            const image_name = Date.now() + ext_name;
            req.files.thumbnail.mv("C:/xampp/htdocs/SmartChef/public/upload/" + image_name);

            var id = req.params.id;
            var title = req.body.title;
            var content = req.body.content;
            var cateid = req.body.category;
            var thumbnail = image_name;
            var created_at = new Setting().getCurrentDate();
            

            var postItem = new post(title, content, cateid, thumbnail, created_at);
            var dao = new postDao();
            dao.Update(id, postItem);
            new Setting().Removefile(req.body.currentthumbnail)
        }else{
            var id = req.params.id;
            var title = req.body.title;
            var content = req.body.content;
            var cateid = req.body.category;
            var thumbnail = req.body.currentthumbnail;
            var created_at = new Setting().getCurrentDate();

            var postItem = new post(title, content, cateid, thumbnail, created_at);
            var dao = new postDao();
            dao.Update(id, postItem);
        }
        res.redirect('/admin/allpost')
    }

    getUserPost(req, res, next){
        var dao = new postDao();
        dao.All((err, rows) => {
            if (err) { 
                console.log(err) 
            }
            else {
                res.render('user/userpost', { dt: rows.recordset })
            }
        });
    }

    getPostFromId(req, res, next){
        var dao = new postDao();
        var article;
        var posts;
        var commentsDao = new commentDao();
        var comments;
        var subCmt;
        dao.GetPostFromId(req.params.id, (err, rows) => {
            if (err) console.log(err) 
            else {
                article = rows.recordset;
                dao.All5((err, rs) => {
                    if (err) console.log(err)
                    else{
                        posts = rs.recordset;
                        commentsDao.All(req.params.id, (err, rows) => {
                            if (err) console.log(err)
                            else{
                                comments = rows.recordset;
                                commentsDao.subCmt(req.params.id, (err, rows) => {
                                    if (err) console.log(err);
                                    else{
                                        subCmt = rows.recordset;
                                        if(req.session.isLoggedIn){
                                            article.forEach(element => {
                                                if(req.session.level == 27){
                                                    res.render('user/post', {article: article, posts: posts, comments: comment, subcmt: subCmt})
                                                }
                                                if(req.session.level == 26){
                                                    if(element.category_id <= 20 ){
                                                        res.render('user/post', {article: article, posts: posts, comments: comments, subcmt: subCmt})
                                                    }else{
                                                        res.redirect('/shoppingcart/27')
                                                    }
                                                }
                                                if(req.session.level == 25){
                                                    if(element.category_id == 18){
                                                        res.render('user/post', {article: article, posts: posts, comments: comments, subcmt: subCmt})
                                                    }else{
                                                        res.redirect('/shoppingcart/26')
                                                    }
                                                }
                                            })
                                        }else{
                                            res.redirect('/login')
                                        }
                                    }
                                })
                            }
                        })
                    }
                })
            }
        });
    }

    getCategory(req, res, next) {
        if(req.session.isLoggedIn)
        var dao = new categoryDao();
        dao.All((err, rows) => {
            if (err) {
                console.log(err)
            }else{
                res.render('admin/post', {dt: rows.recordset})
            }
        })
    }

    postComments(req,res,next){
        var item = new comment(req.body.postid, req.body.userid, req.body.comments, req.body.created_at, req.body.cmt_id);
        var dao = new commentDao();
        dao.Create(item);
        var msg = 'success'
        return msg;
    }

}