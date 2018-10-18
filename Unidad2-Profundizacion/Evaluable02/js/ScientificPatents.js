'use strict';
const Publication = require('./Publications').Publications;


class ScientificPatents extends Publication {

    /**
     * 
     * @param {String} title
     * @param {Array} author
     * @param {Number} anyoPublicacion 
     * @param {Number} anyoVencimiento
     */
    constructor(title, author, anyoPublicacion, anyoVencimiento) {
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
        return this._patent;
    }
}

exports.ScientificPatents = ScientificPatents;