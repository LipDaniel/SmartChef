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

    Update(id, item){
        var db = new DbConnect();
        const config = db.getConnect();
        var query =  `Update post set title = @title, 
            content = @content, 
            category_id = @category_id, 
            thumbnail = @thumbnail, 
            created_at = @created_at
            where id = @id`;
      
        sql.connect(config, function (err) {
          if (err) console.log(err);
          var request = new sql.Request()
            .input("title", item.get_title())
            .input("content", item.get_content())
            .input("category_id", item.get_categoryid())
            .input("thumbnail", item.get_thumbnail())
            .input("created_at", item.get_created_at())
            .input("id", id);
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
                request.query(`Select p.id, p.title, p.content, p.created_at, p.thumbnail, p.category_id, c.name from post p join category c on p.category_id = c.id order by p.id desc`, function (err, result) {
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
    All8(callback){
      var db = new DbConnect();
      const config = db.getConnect();
      //set wait timeout and lock wait timeout as per need.
      sql.connect(config, function (err) {
          if (err) console.log(err);
          var request = new sql.Request();
          try {
              request.query(`Select top 8 p.id, p.title, p.content, p.created_at, p.thumbnail, p.category_id, c.name from post p join category c on p.category_id = c.id order by p.id desc`, function (err, result) {
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

    All5(callback){
        var db = new DbConnect();
        const config = db.getConnect();
        //set wait timeout and lock wait timeout as per need.
        sql.connect(config, function (err) {
            if (err) console.log(err);
            var request = new sql.Request();
            try {
                request.query(`Select top 5 p.id, p.title, p.content, p.created_at, p.thumbnail, p.category_id, c.name from post p join category c on p.category_id = c.id order by p.id desc`, function (err, result) {
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

    GetPostFromId(id, callback){
        var db = new DbConnect();
        const config = db.getConnect();
        //set wait timeout and lock wait timeout as per need.
        sql.connect(config, function (err) {
            if (err) console.log(err);
            var request = new sql.Request().input("id", id);
            try {
                request.query(`Select p.id, p.title, p.content, p.created_at, p.thumbnail, p.category_id, c.name from post p join category c on p.category_id = c.id where p.id = @id order by p.id desc`, function (err, result) {
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