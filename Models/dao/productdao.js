var sql = require('mssql');
const DbConnect = require("../DbConnect");
const product = require("../entities/product");

module.exports = class ProductDao {
    static product;
    constructor(){

    }
    Create(item){
        var db = new DbConnect();
        const config = db.getConnect();
        const conn = new sql.ConnectionPool(config).connect().then(db => {
            return db;
        });
        sql.connect(config, function() {
            const conn = new sql.Request()
            console.log('Finished setting the isolation level to read committed');
            try{
                conn.query("insert into product(name,price,cake_recipe,asian_recipe,european_recipe,global_recipe,message_chef) values(?,?,?,?,?,?,?)", 
                                [item.get_name(), item.get_price(), item.get_cakerecipe(), item.get_asianrecipe(), item.get_europeanrecipe(), item.get_globalrecipe(), item.get_messagechef()])
            } catch (err) {
                console.error('Error occurred while creating category: ${err.message}', err);
                conn.rollback();
                console.info('Rollback successful');
                return 'error creating order';
        }})
    }
}