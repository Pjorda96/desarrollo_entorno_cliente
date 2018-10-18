'use strict';

class Publications{

    /**
     * Class Publications
     * 
     * @param {String} title 
     * @param  {Object} author 
     */
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    /**
     * 
     * @returns {String} title 
     */
    getTitle(){
        return this.title;
    }

    /**
     * 
     * @param {String} title 
     */
    setTitle(title){
        this.title = title;
    }

    /**
     * 
     * @returns {Array} author
     */
    getAuthor() {
        return this.author;
    }

    /**
     * 
     * @param {String} author 
     */
    setAuthor(author) {
        this.author = author;
    }
}

exports.Publications = Publications;