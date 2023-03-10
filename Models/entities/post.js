"use strict";
module.exports = class post {
    //fields
    id=-1
    title=''
    content=''
    categoryid=0
    thumbnail=''
    created_at=''
    constructor(title = "", content = "", categoryid = 0, thumbnail = '', created_at = '') {
        this.title = title;
        this.content = content;
        this.categoryid = categoryid;
        this.thumbnail = thumbnail;
        this.created_at = created_at;
    }
    get_id = () => { return this.id; }
    set_id = (val) => { this.id = val; }
    get_title = () => { return this.title; }
    set_title = (val) => { this.title = val; }
    get_content = () => { return this.content; }
    set_content = (val) => { this.content = val; }
    get_categoryid = () => { return this.categoryid; }
    set_categoryid = (val) => { this.categoryid = val; }
    get_thumbnail = () => {return this.thumbnail}
    set_thumbnail = (val) => {this.thumbnail = val}
    get_created_at = () => {return this.created_at}
    set_created_at = (val) => {this.created_at = val}
};