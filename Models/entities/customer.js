"use strict";
module.exports = class customer {
    //fields
    id=-1
    email=''
    firstname=''
    password=''
    phone=''
    rank_id=25

    constructor(email = "", firstname = "", password='', phone="", rank_id = 25) {
        this.email = email;
        this.firstname = firstname;
        this.password = password;
        this.phone = phone;
        this.rank_id = rank_id;
    }
    get_id = () => { return this.id; }
    set_id = (val) => { this.id = val; }
    get_email = () => { return this.email; }
    set_email = (val) => { this.email = val; }
    get_firstname = () => { return this.firstname; }
    set_firstname = (val) => { this.firstname = val; }
    get_password = () => { return this.password; }
    set_password = (val) => { this.password = val; }
    get_phone = () => { return this.phone; }
    set_phone = (val) => { this.phone = val; }
    get_rank_id = () => { return this.rank_id; }
    set_rank_id = (val) => { this.rank_id = val; }
};