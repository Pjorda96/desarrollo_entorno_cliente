/**
 * Class that represents a mathematical fraction
 *  Numerator
 * ------------
 * Denominator
 * 
 * Offers basic arithmetic operations over fractions
 */
class Fraction {
    /**
     * Creates a fraction by providing a numerical numerator and a numerical denominator
     * @param {Number} numerator the numerator for the fraction. Should be integer
     * @param {Number} denominator The denominator for the fraction. Should be integer
     * @throws {Error} If the numerator or denominator are not integers
     */
    constructor(numerator, denominator) {
        if (!Number.isInteger(numerator)) {
            throw new Error('The numerator provided is not an integer');
        }
        if (!Number.isInteger(denominator)) {
            throw new Error('The denominator provided is not an integer');
        }
        this.numerator = numerator;
        this.denominator = denominator;
        this._simplify();
    }

    /**
     * Method employed internally to simplify fractions. Finds the maximum common divisor of both numerator and denominator
     * and divides them both
     */
    _simplify() {
        let mcd = Fraction.mcd(this.numerator, this.denominator);
        this.numerator = this.numerator / mcd;
        this.denominator = this.denominator / mcd;
    }

    /**
     * Static method that finds the maximum common divisor of two numbers
     * @param {Number} x The first number
     * @param {Number} y The second number
     * @returns {Number} the maximum common divisor of both numbers
     * @throws {Error} If the first or second parameter are not integers
     */
    static mcd(x, y) {
        if (!Number.isInteger(x)) {
            throw new Error('The first parameter provided is not an integer');
        }
        if (!Number.isInteger(y)) {
            throw new Error('The second parameter provided is not an integer');
        }
        //The maximum common divisor must be between 1 and the minimum of both numerator and denominator
        let maxToCheck = Math.min(x, y);
        let maxDivisor = 1;
        for (let i = 2; i <= maxToCheck; i++) {
            if (x % i === 0 && y % i === 0) {
                maxDivisor = i;
            }
        }
        return maxDivisor;
    }

    /**
     * Static method that finds the minimum common multiple of two numbers
     * @param {Number} x The first number
     * @param {Number} y The second number
     * @returns {Number} The minimum common multiple of the two numbers
     * @throws {Error} If the first or second parameter are not numbers
     */
    static mcm(x, y) {
        if (!Number.isInteger(x)) {
            throw new Error('The first parameter provided is not an integer');
        }
        if (!Number.isInteger(y)) {
            throw new Error('The second parameter provided is not an integer');
        }
        //The minimum common multiple is between the largest of both numbers and the multiplication of both
        let startFrom = Math.max(x, y);
        let maxMultiple = x * y;

        for (let i = startFrom; i <= maxMultiple; i++) {
            if (i % x === 0 && i % y === 0) {
                return i;
            }
        }
        return maxMultiple;
    }

    /**
     * Add the current fraction to another
     * @param {Fraction} otherFraction The other fraction to be added
     * @returns {Fraction} The fraction resulting of adding the current fraction and the other
     * @throws {TypeError} If the parameter is not a fraction or an integer
     */
    add(otherFraction) {

        if (!(otherFraction instanceof Fraction) && (!Number.isInteger(otherFraction))) {
            throw new TypeError('Add method requires another fraction');
        }
        if (Number.isInteger(otherFraction)) {
            otherFraction = new Fraction(otherFraction, 1);
        }
        let mcm = Fraction.mcm(this.denominator, otherFraction.denominator);
        let newNumerator = this.numerator * mcm / this.denominator + otherFraction.numerator * mcm / otherFraction.denominator;
        let newDenominator = mcm;
        let newFraction = new Fraction(newNumerator, newDenominator);
        newFraction._simplify();
        return newFraction;
    }

    /**
     * Multiplies the current fraction by another fraction or integer
     * @param {Fraction} otherFraction The other fraction or integer to operate with
     * @returns {Fraction} The result of multiplying both fractions
     * @throws {TypeError} If the parameter is not a fraction or an integer
     */
    multiply(otherFraction) {
        if (!(otherFraction instanceof Fraction) && (!Number.isInteger(otherFraction))) {
            throw new TypeError('Add method requires another fraction');
        }
        if (Number.isInteger(otherFraction)) {
            otherFraction = new Fraction(otherFraction, 1);
        }
        let newNumerator = this.numerator * otherFraction.numerator;
        let newDenominator = this.denominator * otherFraction.denominator;
        let newFraction = new Fraction(newNumerator, newDenominator);
        newFraction._simplify();
        return newFraction;
    }

    /**
     * Gets the current faction and takes away another fraction
     * @param {Fraction} otherFraction The other fraction to take away
     * @returns {Fraction} The fraction resulting of taking down the parameter
     * @throws {TypeError} if the parameter is not a fraction or integer
     */
    minus(otherFraction) {
        let other = otherFraction.multiply(-1);
        return this.add(other);
    }

    /**
     * Divides the current fraction by another
     * @param {Fraction} otherFraction the other fraction or integer to divide by
     * @returns {Fraction} The result of the division
     * @throws {TypeError} if the provided parameter is not an integer or fraction
     */
    divide(otherFraction) {
        if (!(otherFraction instanceof Fraction) && (!Number.isInteger(otherFraction))) {
            throw new TypeError('Add method requires another fraction');
        }
        if (Number.isInteger(otherFraction)) {
            otherFraction = new Fraction(otherFraction, 1);
        }
        let newNumerator = this.numerator * otherFraction.denominator;
        let newDenominator = this.denominator * otherFraction.numerator;
        let newFraction = new Fraction(newNumerator, newDenominator);
        newFraction._simplify();
        return newFraction;
    }

    /**
     * Returns the numerator of the current fraction
     * @returns {Number} the numerator
     */
    getNumerator() {
        return this.numerator;
    }

    /**
     * Returns the denominator of the current fraction
     * @returns {Number} the denominator
     */
    getDenominator() {
        return this.denominator;
    }
};

exports.Fraction = Fraction;