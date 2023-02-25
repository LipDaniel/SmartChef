var sql = require('mssql/msnodesqlv8');
const DbConnect = require("../DbConnect");

module.exports = class CustomerDao {
    static customer;
    constructor(){
    }
    Create(item){
        var db = new DbConnect();
        const config = db.getConnect();
        var query =  `Insert into customer(email,firstname,password,phone,rank_id) values(@email,@firstname,@password,@phone,@rank_id)`
      
        sql.connect(config, function (err) {
          if (err) console.log(err);
          var request = new sql.Request()
            .input("email", item.get_email())
            .input("firstname", item.get_firstname())
            .input("password", item.get_password())
            .input("phone", item.get_phone())
            .input("rank_id", item.get_rank_id());
          try {
            request.query(query, function (err, result) {
              if (err) {
                console.log(err);
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

    checkLogin(email, callback) {
        var db = new DbConnect();
        const config = db.getConnect();
        var query = `Select * from customer where email = @email`;
        //set wait timeout and lock wait timeout as per need.
        sql.connect(config, function (err) {
            if (err) console.log(err);
            var request = new sql.Request()
              .input("email", email);
            try {
                request.query(query, function (err, result) {
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