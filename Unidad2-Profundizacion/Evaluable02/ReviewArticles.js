'use strict';
const ScientificArticles = require('./ScientificArticles').ScientificArticles;


class ReviewArticles extends ScientificArticles {

    /**
     * 
     * @param {String} title
     * @param {Array} author
     * @param {Number} numPags 
     * @param {Number} anyoPublicacion
     * @param {Number} numMenciones
     * @param {String} revistaTitle 
     * @param {String} editorial
     * @param {Number} impactFactor
     */
    constructor(title, author, numPags, anyoPublicacion, numMenciones, revistaTitle,
        editorial, impactFactor) {
        super(title, author, numPags, anyoPublicacion, numMenciones);
        this.revistaTitle = revistaTitle;
        this.editorial = editorial;
        this.impactFactor = impactFactor;
        this._review = true;
    }

    /**
     * @returns {String} revistaTitle
     */
    getRevistaTitle() {
        return this.revistaTitle;
    }

    /**
     * 
     * @param {String}  revistaTitle
     */
    setRevistaTitle(revistaTitle) {
        this.revistaTitle = revistaTitle;
    }

    /**
     * @returns {String} editorial
     */
    getEditorial() {
        return this.editorial;
    }

    /**
     * 
     * @param {String} editorial
     */
    setEditorial(editorial) {
        this.editorial = editorial;
    }

    /**
     * @returns {Number} impactFactor
     */
    getImpactFactor() {
        return thisimpactFactors;
    }

    /**
     * 
     * @param {Number} impactFactor
     */
    setImpactFactor(impactFactor) {
        this.impactFactor = impactFactor;
    }

    isReview() {
        return true;
    }
}

exports.ReviewArticles = ReviewArticles;