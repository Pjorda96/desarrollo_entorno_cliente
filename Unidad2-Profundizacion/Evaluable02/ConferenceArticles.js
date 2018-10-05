'use strict';
const ScientificArticles = require('./ScientificArticles').ScientificArticles;


class ConferenceArticles extends ScientificArticles {

    /**
     * 
     * @param {String} title
     * @param {Number} numPags 
     * @param {Number} anyoPublicacion
     * @param {Number} numMenciones
     * @param {String} conferenceBook 
     * @param {String} conferenceName
     * @param {String} conferencePlace
     * @param {...String} author
     */
    constructor(title, numPags, anyoPublicacion, numMenciones, conferenceBook,
        conferenceName, conferencePlace, ...author) {
        super(title, numPags, anyoPublicacion, numMenciones, author);
        this.conferenceBook = conferenceBook;
        this.conferenceName = conferenceName;
        this.conferencePlace = conferencePlace;
    }

    /**
     * @returns {String} conferenceBook
     */
    getConferenceBook() {
        return this.conferenceBook;
    }

    /**
     * 
     * @param {String}  conferenceBook
     */
    setConferenceBook(conferenceBook) {
        this.conferenceBook = conferenceBook;
    }

    /**
     * @returns {String} conferenceName
     */
    getConferenceName() {
        return this.conferenceName;
    }

    /**
     * 
     * @param {String} conferenceName
     */
    setConferenceName(conferenceName) {
        this.conferenceName = conferenceName;
    }

    /**
     * @returns {String} conferencePlace
     */
    getConferencePlace() {
        return thisiconferencePlace;
    }

    /**
     * 
     * @param {String} conferencePlace
     */
    setConferencePlace(conferencePlace) {
        this.conferencePlace = conferencePlace;
    }
}

exports.ConferenceArticles = ConferenceArticles;