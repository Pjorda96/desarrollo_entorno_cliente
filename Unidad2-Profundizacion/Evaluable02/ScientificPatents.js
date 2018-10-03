'use strict';
const Publication = require('./Publications').Publications;


class ScientificPatents extends Publication {

    /**
     * 
     * @param {String} title 
     * @param {String} author 
     * @param {Number} anyoPublicacion 
     * @param {Number} anyoVencimiento
     */
    constructor(title, ...author, anyoPublicacion, anyoVencimiento) {
        super(title, author);
        this.anyoPublicacion = anyoPublicacion;
        this.anyoVencimiento = anyoVencimiento;
        this._patent = true;
    }
}

exports.ScientificPatents = ScientificPatents;