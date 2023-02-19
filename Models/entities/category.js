"use strict";
module.exports = class category {
    //fields
    id=-1
    name=''
    status=0

    constructor(name = "", status = 0) {
        this.name = name;
        this.status = status;
    }
    get_id = () => { return this.id; }
    set_id = (val) => { this.id = val; }
    get_name = () => { return this.name; }
    set_name = (val) => { this.name = val; }
    get_status = () => { return this.status; }
    set_status = (val) => { this.status = val; }
};