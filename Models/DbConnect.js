module.exports = class DbConnect{
    constructor(){                          
    }
    getConnect(){
        this.config= {
            host:"smartchef.mssql.somee.com",
            database:'smartchef',
            user:"nhannguyen_SQLLogin_1",
            password:'4d52kand8k',
            driver: 'mssql',
            rowsAsArray:true
        };
        return this.config;
    }
};

