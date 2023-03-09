var sql = require('mssql/msnodesqlv8');
const DbConnect = require("../DbConnect");
const faq = require("../entities/faq");

module.exports = class FaqDao {
    static faq;
    constructor(){
    }

    Create(item){
        var db = new DbConnect();
        const config = db.getConnect();
        var query =  `Insert into faq(question,answer) values(@question,@answer)`
      
        sql.connect(config, function (err) {
          if (err) console.log(err);
          var request = new sql.Request()
            .input("question", item.get_question())
            .input("answer", item.get_answer());
          try {
            request.query(query, function (err, result) {
              if (err) {
                return false;
              } else {
                console.log(result.rowsAffected)
                return true;
              }
            });
          } catch (err) {
            console.error("Error occurred while get all category: ", err);
            console.info("Rollback successful");
            return false;
        }});
    }

    All(callback) {
        var db = new DbConnect();
        const config = db.getConnect();
        //set wait timeout and lock wait timeout as per need.
        sql.connect(config, function (err) {
            if (err) console.log(err);
            var request = new sql.Request();
            try {
                request.query(`Select * from faq`, function (err, result) {
                    if (err) {
                        callback(err, null);
                    } else {
                        callback(null, result);
                    }
                });
            } catch (err) {
                console.error("Error occurred while get all category: ", err);
                console.info("Rollback successful");
                return false;
            }
        })
    }
}