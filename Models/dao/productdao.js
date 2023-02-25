var sql = require('mssql/msnodesqlv8');
const DbConnect = require("../DbConnect");
const product = require("../entities/product");

module.exports = class ProductDao {
    static product;
    constructor(){
    }
    Create(item){
        var db = new DbConnect();
        const config = db.getConnect();
        var query =  `Insert into product(name,price,cake_recipe,asian_recipe,european_recipe,global_recipe,message_chef) values(@name,@price,@cake_recipe,@asian_recipe,@european_recipe,@global_recipe,@message_chef)`
      
        sql.connect(config, function (err) {
          if (err) console.log(err);
          var request = new sql.Request()
            .input("name", item.get_name())
            .input("price", item.get_price())
            .input("cake_recipe", item.get_cakerecipe())
            .input("asian_recipe", item.get_asianrecipe())
            .input("european_recipe", item.get_europeanrecipe())
            .input("global_recipe", item.get_globalrecipe())
            .input("message_chef", item.get_messagechef());
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
    getProductFromId(id, callback){
      var db = new DbConnect();
      const config = db.getConnect();
      //set wait timeout and lock wait timeout as per need.
      sql.connect(config, function (err) {
          if (err) console.log(err);
          var request = new sql.Request().input("id", id);
          try {
              request.query(`Select * from product where id = @id`, function (err, result) {
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
    All(callback) {
        var db = new DbConnect();
        const config = db.getConnect();
        //set wait timeout and lock wait timeout as per need.
        sql.connect(config, function (err) {
            if (err) console.log(err);
            var request = new sql.Request();
            try {
                request.query(`Select * from product`, function (err, result) {
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