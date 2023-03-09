var sql = require('mssql/msnodesqlv8');
const DbConnect = require("../DbConnect");
const comment = require("../entities/comment");

module.exports = class FaqDao {
    constructor(){}

    Create(item){
        var db = new DbConnect();
        const config = db.getConnect();
        var query =  `Insert into comment(post_id,user_id,content,created_at,cmt_id) values(@post_id,@user_id,@content,@created_at, @cmt_id)`
      
        sql.connect(config, function (err) {
          if (err) console.log(err);
          var request = new sql.Request()
            .input("post_id", item.get_postid())
            .input("user_id", item.get_userid())
            .input("content", item.get_content())
            .input("created_at", item.get_created_at())
            .input("cmt_id", item.get_cmt_id());
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


    All(id, callback) {
        var db = new DbConnect();
        const config = db.getConnect();
        //set wait timeout and lock wait timeout as per need.
        sql.connect(config, function (err) {
            if (err) console.log(err);
            var request = new sql.Request().input('id', id);
            try {
                request.query(`Select co.id, co.post_id, co.user_id, co.content, co.created_at, co.cmt_id, cu.firstname from comment co join customer cu on co.user_id = cu.id where post_id = @id and co.cmt_id = 0`, function (err, result) {
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

    subCmt(id, callback) {
      var db = new DbConnect();
      const config = db.getConnect();
      //set wait timeout and lock wait timeout as per need.
      sql.connect(config, function (err) {
          if (err) console.log(err);
          var request = new sql.Request().input('id', id);
          try {
              request.query(`Select co.id, co.post_id, co.user_id, co.content, co.created_at, co.cmt_id, cu.firstname from comment co join customer cu on co.user_id = cu.id where post_id = @id and co.cmt_id > 0`, function (err, result) {
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