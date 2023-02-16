"use strict";
module.exports = class product {
    //fields
    id=-1
    name=''
    price=0
    cakerecipe=0
    asianrecipe=0
    europeanrecipe=0
    globalrecipe=0
    messagechef=0
    constructor(name = "", price = 0, cakerecipe = 0, asianrecipe = 0, europeanrecipe = 0, globalrecipe = 0, messagechef = 0) {
        
        this.name = name;
        this.price = price;
        this.cakerecipe = cakerecipe;
        this.asianrecipe = asianrecipe;
        this.europeanrecipe = europeanrecipe;
        this.globalrecipe = globalrecipe;
        this.messagechef = messagechef;
    }
    get_id = () => { return this.id; }
    set_id = (val) => { this.id = val; }
    get_name = () => { return this.name; }
    set_name = (val) => { this.name = val; }
    get_price = () => { return this.price; }
    set_price = (val) => { this.price = val; }
    get_cakerecipe = () => { return this.cakerecipe; }
    set_cakerecipe = (val) => { this.cakerecipe = val; }
    get_asianrecipe = () => { return this.asianrecipe; }
    set_asianrecipe = (val) => { this.asianrecipe = val; }
    get_europeanrecipe = () => { return this.europeanrecipe; }
    set_europeanrecipe = (val) => { this.europeanrecipe = val; }
    get_globalrecipe = () => { return this.globalrecipe; }
    set_globalrecipe = (val) => { this.globalrecipe = val; }
    get_messagechef = () => { return this.messagechef; }
    set_messagechef = (val) => { this.messagechef = val; }
};