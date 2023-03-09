"use strict";
module.exports = class faq {
    //fields
    id=1
    question = ''
    answer = ''

    constructor(question = '', answer = '') {
        this.question = question;
        this.answer = answer;
    }
    get_id = () => { return this.id; }
    set_id = (val) => { this.id = val; }
    get_question = () => { return this.question; }
    set_question = (val) => { this.question = val; }
    get_answer = () => { return this.answer; }
    set_answer = (val) => { this.answer = val; }    
};