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
        var query =  `Insert into post(title,content,category_id,thumbnail,created_at) values(@title,@content,@category_id,@thumbnail,@created_at)`;
      
        sql.connect(config, function (err) {
          if (err) console.log(err);
          var request = new sql.Request()
            .input("title", item.get_title())
            .input("content", item.get_content())
            .input("category_id", item.get_categoryid())
            .input("thumbnail", item.get_thumbnail())
            .input("created_at", item.get_created_at());
          try {
            request.query(query, function (err, result) {
              if (err) {
                console.log(err)
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
                request.query(`Select * from post p join category c on p.category_id = c.id`, function (err, result) {
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