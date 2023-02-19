var sql = require('mssql/msnodesqlv8');
const DbConnect = require("../DbConnect");
const post = require("../entities/post");

module.exports = class PostDao {
    static post;
    constructor(){
    }
    Create(item){
        var db = new DbConnect();
        const config = db.getConnect();
        var query =  `Insert into post(title,content,category_id) values(@title,@content,@category_id)`;
      
        sql.connect(config, function (err) {
          if (err) console.log(err);
          var request = new sql.Request()
            .input("title", item.get_title())
            .input("content", item.get_content())
            .input("category_id", item.get_categoryid());
          try {
            request.query(query, function (err, result) {
              if (err) {
                console.log(1)
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
                request.query(`Select * from post`, function (err, result) {
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