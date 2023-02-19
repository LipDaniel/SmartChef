var sql = require('mssql/msnodesqlv8');
const DbConnect = require("../DbConnect");
const category = require("../entities/category");

module.exports = class PostDao {
    static category;
    constructor(){
    }

    All(callback) {
        var db = new DbConnect();
        const config = db.getConnect();
        //set wait timeout and lock wait timeout as per need.
        sql.connect(config, function (err) {
            if (err) console.log(err);
            var request = new sql.Request();
            try {
                request.query(`Select * from category`, function (err, result) {
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