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

test('Testing mcd', () => {
    //el mcd es 1
    expect(Fraction.mcd(4, 3)).toBe(1);
    //el mcd es 2 (caso inicial del bucle)
    expect(Fraction.mcd(22, 30)).toBe(2);
    //el mcd es uno de los numeros
    expect(Fraction.mcd(3, 9)).toBe(3);
    expect(Fraction.mcd(9, 3)).toBe(3);
    // entre 2 y uno de los dos parámetros 
    //de la función(no incluídos)
    expect(Fraction.mcd(6, 9)).toBe(3);
    //el primer parámetro no es un entero
    expect(() => Fraction.mcd(1.5, 5)).toThrowError(Error);
    //el segunod parámetro no es un entero
    expect(() => Fraction.mcd(5, 1.5)).toThrowError(Error);
});

test('Testing mcm', () => {
    // el mcm es uno de los parámetros
    expect(Fraction.mcm(4, 2)).toBe(4);
    // el mcm es la multiplicación de los parámetros
    expect(Fraction.mcm(3, 2)).toBe(6);
    // el mcm está entre el máximo de los parámetros 
    //y la multiplicación de ambos(no incluidos)
    expect(Fraction.mcm(4, 6)).toBe(12);
    //el primer parámetro no es un entero
    expect(() => Fraction.mcm(1.5, 5)).toThrowError(Error);
    //el segunod parámetro no es un entero
    expect(() => Fraction.mcm(5, 1.5)).toThrowError(Error);
});