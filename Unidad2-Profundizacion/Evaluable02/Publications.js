'use strict';

class Publications{

    /**
     * Class Publications
     * 
     * @param {String} title 
     * @param  {...String} author 
     */
    constructor(title, ...author) {
        this.title = title;
        this.author = author;
    }
}

exports.Publications = Publications;