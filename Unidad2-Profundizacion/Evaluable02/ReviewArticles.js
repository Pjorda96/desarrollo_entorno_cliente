'use strict';
const ScientificArticles = require('./ScientificArticles').ScientificArticles;


class ReviewArticles extends ScientificArticles {

    /**
     * 
     * @param {String} title
     * @param {Number} numPags 
     * @param {Number} anyoPublicacion
     * @param {Number} numMenciones
     * @param {String} revistaTitle 
     * @param {String} editorial
     * @param {Number} impactFactor
     * @param {...String} author
     */
    constructor(title, numPags, anyoPublicacion, numMenciones, revistaTitle,
        editorial, impactFactor, ...author) {
        super(title, numPags, anyoPublicacion, numMenciones, author);
        this.revistaTitle = revistaTitle;
        this.editorial = editorial;
        this.impactFactor = impactFactor;
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
     * @returns {Number} editorial
     */
    getEditorial() {
        return this.editorial;
    }

    /**
     * 
     * @param {Number} editorial
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
}

exports.ReviewArticles = ReviewArticles;