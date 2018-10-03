'use strict';
const Publication = require('./Publications').Publications;


class ScientificPatents extends Publication {

    /**
     * 
     * @param {String} title  
     * @param {Number} anyoPublicacion 
     * @param {Number} anyoVencimiento
     * @param {...String} author
     */
    constructor(title, anyoPublicacion, anyoVencimiento, ...author) {
        super(title, author);
        this.anyoPublicacion = anyoPublicacion;
        this.anyoVencimiento = anyoVencimiento;
        this._patent = true;
    }

    /**
     * @returns {Number} anyoPublicacion
     */
    getAnyoPublicacion() {
        return this.anyoPublicacion;
    }

    /**
     * 
     * @param {Number}  anyoPublicacion
     */
    setAnyoPublicacion(anyoPublicacion) {
        this.anyoPublicacion = anyoPublicacion;
    }

    /**
     * @returns {Number} anyoVencimiento
     */
    getAnyoVencimiento() {
        return this.anyoVencimiento;
    }

    /**
     * 
     * @param {Number} anyoVencimiento
     */
    setAnyoVencimiento(anyoVencimiento) {
        this.anyoVencimiento = anyoVencimiento;
    }

    /**
     * @returns {Boolean} true
     */
    isPatent(){
        return true;
    }
}

exports.ScientificPatents = ScientificPatents;