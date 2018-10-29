const Fraction = require('../fraction').Fraction;

test('Constructor error', () => {
    expect(() => new Fraction(1.2, 4)).toThrow(Error);
});

test('Constructor error II', () => {
    expect(() => new Fraction(1, 4.3)).toThrow(Error);
});

test('Testing simplify I', () => {
    let fr = new Fraction(4, 2);
    expect(fr.getNumerator()).toBe(2);
    expect(fr.getDenominator()).toBe(1);
});

test('Testing simplify II', () => {
    let fr = new Fraction(3, 5);
    expect(fr.getNumerator()).toBe(3);
    expect(fr.getDenominator()).toBe(5);
});

/*
# Testing de mcd
*/

test('Testing mcd: es 1', () => {
    expect(Fraction.mcd(4, 3)).toBe(1);
});

test('Testing mcd: es 2 (caso inicial del bucle)', () => {
    expect(Fraction.mcd(22, 30)).toBe(2);
});

test('Testing mcd: es uno de los numeros', () => {
    expect(Fraction.mcd(3, 9)).toBe(3);
    expect(Fraction.mcd(9, 3)).toBe(3);
});

test('Testing mcd: entre 2 y uno de los dos parámetros de la función(no incluídos)', () => {
    expect(Fraction.mcd(6, 9)).toBe(3);
});

test('Testing mcd: el primer parámetro no es un entero', () => {
    expect(() => Fraction.mcd(1.5, 5)).toThrowError(Error);
});

test('Testing mcd: el segundo parámetro no es un entero', () => {
    expect(() => Fraction.mcd(1.5, 5)).toThrowError(Error);
});

/*
# Testing de mcm
*/

test('Testing mcm: es uno de los parámetros', () => {
    expect(Fraction.mcm(4, 2)).toBe(4);
});

test('Testing mcm: es la multiplicación de los parámetros', () => {
    expect(Fraction.mcm(3, 2)).toBe(6);
});

test('Testing mcm: está entre el máximo de los parámetros y la multiplicación de ambos(no incluidos)', () => {
    expect(Fraction.mcm(4, 6)).toBe(12);
});

test('Testing mcm: el primer parámetro no es un entero', () => {
            expect(() => Fraction.mcm(1.5, 5)).toThrowError(Error);
});

test('Testing mcm: el segunod parámetro no es un entero', () => {
            expect(() => Fraction.mcm(5, 1.5)).toThrowError(Error);
});

test('Testing mcm: el segunod parámetro no es un entero', () => {
    expect(() => Fraction.mcm(5, 1.5)).toThrowError(Error);
});

/*
# Testing suma de fracciones
*/

test('Testing add: el parametro es un entero', () => {
    let fr1 = new Fraction(2,4);
    let fr2 = fr1.add(2);
    expect(fr2.getNumerator()).toBe(5);
    expect(fr2.getDenominator()).toBe(2);
});

test('Testing add: el parametro es otra fracción', () => {
    let fr1 = new Fraction(2, 4);
    let fr2 = new Fraction(1, 3);
    let fr3 = fr1.add(fr2);
    expect(fr3.getNumerator()).toBe(5);
    expect(fr3.getDenominator()).toBe(6);
});

test('Testing add: el parametro no es una fracción ni un entero', () => {
    let fr1 = new Fraction(2, 4);
    expect(() => fr1.divide('a')).toThrowError(Error);
});

/*
# Testing multiplicacion de fracciones
*/

test('Testing multiply: el parametro es un entero', () => {
    let fr1 = new Fraction(2, 4);
    let fr2 = fr1.multiply(3);
    expect(fr2.getNumerator()).toBe(3);
    expect(fr2.getDenominator()).toBe(2);
});

test('Testing multiply: el parametro es otra fracción', () => {
    let fr1 = new Fraction(2, 4);
    let fr2 = new Fraction(3, 2);
    let fr3 = fr1.multiply(fr2);
    expect(fr3.getNumerator()).toBe(3);
    expect(fr3.getDenominator()).toBe(4);
});

test('Testing multiply: el parametro no es una fracción ni un entero', () => {
    let fr1 = new Fraction(2, 4);
    expect(() => fr1.divide('a')).toThrowError(Error);
});

/*
# Testing divide de fracciones
*/

test('Testing divide: el parametro es un entero', () => {
    let fr1 = new Fraction(2, 4);
    let fr2 = fr1.divide(2);
    expect(fr2.getNumerator()).toBe(1);
    expect(fr2.getDenominator()).toBe(4);
});

test('Testing divide: el parametro es otra fracción', () => {
    let fr1 = new Fraction(2, 4);
    let fr2 = new Fraction(1, 3);
    let fr3 = fr1.divide(fr2);
    expect(fr3.getNumerator()).toBe(3);
    expect(fr3.getDenominator()).toBe(2);
});

test('Testing divide: el parametro no es una fracción ni un entero', () => {
    let fr1 = new Fraction(2, 4);
    expect(() => fr1.divide('a')).toThrowError(Error);
});

/*
# Testing resta de fracciones
*/

test('Testing resta: el parametro es otra fracción', () => {
    let fr1 = new Fraction(2, 4);
    let fr2 = new Fraction(1, 3);
    let fr3 = fr1.minus(fr2);
    expect(fr3.getNumerator()).toBe(1);
    expect(fr3.getDenominator()).toBe(6);
});

test('Testing resta: el parametro no es una fracción ni un entero', () => {
    let fr1 = new Fraction(2, 4);
    expect(() => fr1.divide('a')).toThrowError(Error);
});