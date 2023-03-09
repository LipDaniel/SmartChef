"use strict";
module.exports = class comment {
    //fields
    id=1
    postid = 1
    userid = 1
    content = ''
    created_at = ''
    cmt_id  = 0


    constructor(postid = 1, userid = 1, content = '', created_at = '', cmt_id = 0) {
        this.postid = postid;
        this.userid = userid;
        this.content = content;
        this.created_at = created_at;
        this.cmt_id = cmt_id;
    }
    get_id = () => { return this.id; }
    set_id = (val) => { this.id = val; }
    get_postid = () => { return this.postid; }
    set_postid = (val) => { this.postid = val; }
    get_userid = () => { return this.userid; }
    set_userid = (val) => { this.userid = val; }   
    get_content = () => { return this.content; }
    set_content = (val) => { this.content = val; }  
    get_created_at = () => { return this.created_at; }
    set_created_at = (val) => { this.created_at = val; }   
    get_cmt_id = () => { return this.cmt_id; }
    set_cmt_id = (val) => { this.cmt_id = val; } 
};