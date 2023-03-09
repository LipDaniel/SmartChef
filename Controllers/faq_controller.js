const faq = require('../Models/entities/faq');
const faqDao = require('../models/dao/faqdao');

module.exports = class faq_controller {
    getFaq(req, res, next){
        var dao = new faqDao();
        dao.All((err, rows) => {
            if (err) { 
                console.log(err) 
            }
            else {
                res.render('admin/faq', { data: rows.recordset })
            }
        });
    }

    postFaq(req, res, next){
        var question = req.body.question;
        var answer = req.body.answer;
        var item = new faq(question, answer);
        var dao = new faqDao();
        dao.Create(item);
        res.redirect('/admin/faq');
    }
}