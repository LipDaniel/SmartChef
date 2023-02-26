"use strict";
module.exports = class bill {
    //fields
    id=1
    userid = 0
    productid = 0
    total = 0

    constructor(userid = 0, productid = 0, total = 0) {
        this.userid = userid;
        this.productid = productid;
        this.total = total;
    }
    get_id = () => { return this.id; }
    set_id = (val) => { this.id = val; }
    get_userid = () => { return this.userid; }
    set_userid = (val) => { this.userid = val; }
    get_productid = () => { return this.productid; }
    set_productid = (val) => { this.productid = val; }    
    get_total = () => { return this.total; }
    set_total = (val) => { this.total = val; }
};