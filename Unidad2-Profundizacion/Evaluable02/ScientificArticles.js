'use strict';
const Publication = require('./Publications').Publications;


class ScientificArticles extends Publication {

    /**
     * 
     * @param {String} title  
     * @param {Number} numPags 
     * @param {Number} anyoPublicacion
     * @param {Number} numMenciones
     * @param {...String} author
     */
    constructor(title, numPags, anyoPublicacion, numMenciones, ...author) {
        super(title, author);
        this.numPags = numPags;
        this.anyoPublicacion = anyoPublicacion;
        this.numMenciones = numMenciones;
        this._article = true;
    }

    /**
     * @returns {Number} numPags
     */
    getNumPags() {
        return this.numPags;
    }

    /**
     * 
     * @param {Number}  numPags
     */
    setNumPags(numPags) {
        this.numPags = numPags;
    }

    /**
     * @returns {Number} anyoPublicacion
     */
    getAnyoPublicacion() {
        return this.anyoPublicacion;
    }

    /**
     * 
     * @param {Number} anyoPublicacion
     */
    setAnyoPublicacion(anyoPublicacion) {
        this.anyoPublicacion = anyoPublicacion;
    }

    /**
     * @returns {Number} numMenciones
     */
    getNumMenciones() {
        return this.numMenciones;
    }

    /**
     * 
     * @param {Number} numMenciones
     */
    setNumMenciones(numMenciones) {
        this.numMenciones = numMenciones;
    }

    /**
     * @returns {Boolean} true
     */
    isArticle() {
        return true;
    }
}

exports.ScientificArticles = ScientificArticles;