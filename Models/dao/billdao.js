var sql = require('mssql/msnodesqlv8');
const DbConnect = require("../DbConnect");
const category = require("../entities/bill");

module.exports = class BillDao {
    static category;
    constructor(){
    }

    addBillAndupdate(item) {
        var db = new DbConnect();
        const config = db.getConnect();
        var insertQuery = `Insert into bill(id_user, total, id_product) values (@id_user, @total, @id_product)`;
        var updateQuery = `Update customer set rank_id = @rank_id where id = @id`
        //set wait timeout and lock wait timeout as per need.
        sql.connect(config, function (err) {
            if (err) console.log(err);
            var request = new sql.Request()
                .input("id_user", item.get_userid())
                .input("total", item.get_total())
                .input("id_product", item.get_productid());
            try {
                request.query(insertQuery, function (err, result) {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log(result.rowsAffected);
                    }
                });
            } catch (err) {
                console.error("Error occurred while get all category: ", err);
                console.info("Rollback successful");
                return false;
            }
            var request2 = new sql.Request()
                .input("rank_id",item.get_productid())
                .input("id",item.get_userid())
            try {
                request2.query(updateQuery, function (err, result) {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log(result.rowsAffected);
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