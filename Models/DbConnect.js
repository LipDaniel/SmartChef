module.exports = class DbConnect{
    constructor(){                          
    }
    getConnect(){
        this.config= {
            server:"smartchef.mssql.somee.com",
            database:'smartchef',
            user:"nhannguyen_SQLLogin_1",
            password:'4d52kand8k',
            driver: 'mssql',
            port: 1433,
            rowsAsArray:true
        };
        return this.config;
    }
};

