import { isIndivisible } from './isIndivisible.js'

const testObject = {
    valueUndefined: undefined,
    valueNull: null,
    booleanFalse: false,
    booleanTrue: true,
    booleanNew: new Boolean(true),
    numericNaN: NaN,
    numericInfinity: Infinity,
    numericZero: 0,
    numericBinary: 0b1,
    numericOctal: 0o7,
    numericDecimal: 3.14159,
    numericHexadecimal: 0xf,
    numericNew: new Number(356.7),
    stringNone: '',
    stringLengthy: "'O sole mio",
    stringNew: new String('Getting Started'),
    arrayEmpty: [],
    arrayLengthy: [1, 2, 3],
    objectEmpty: {},
    objectTrivial: {
        a: null,
        b: undefined,
    },
    objectRelevant: {
        a: 1,
        b: 'b',
    },
    functionNoop: () => {},
    dateToday: new Date(),
    dateTodayString: Date(),
    symbolAlpha: Symbol('alpha'),
}

test('isIndivisible accepts primitives', () => {
    expect(isIndivisible(testObject.valueUndefined)).toBe(true)
    expect(isIndivisible(testObject.valueNull)).toBe(true)
    expect(isIndivisible(testObject.booleanTrue)).toBe(true)
    expect(isIndivisible(testObject.booleanFalse)).toBe(true)
    expect(isIndivisible(testObject.booleanNew)).toBe(true)
    expect(isIndivisible(testObject.numericNaN)).toBe(true)
    expect(isIndivisible(testObject.numericInfinity)).toBe(true)
    expect(isIndivisible(testObject.numericZero)).toBe(true)
    expect(isIndivisible(testObject.numericBinary)).toBe(true)
    expect(isIndivisible(testObject.numericOctal)).toBe(true)
    expect(isIndivisible(testObject.numericDecimal)).toBe(true)
    expect(isIndivisible(testObject.numericHexadecimal)).toBe(true)
    expect(isIndivisible(testObject.numericNew)).toBe(true)
    expect(isIndivisible(testObject.stringNone)).toBe(true)
    expect(isIndivisible(testObject.stringLengthy)).toBe(true)
    expect(isIndivisible(testObject.stringNew)).toBe(true)
    expect(isIndivisible(testObject.functionNoop)).toBe(true)
    expect(isIndivisible(testObject.dateTodayString)).toBe(true)
    expect(isIndivisible(testObject.symbolAlpha)).toBe(true)
})

test('isIndivisible rejects:', () => {
    expect(isIndivisible(testObject.arrayEmpty)).toBe(false)
    expect(isIndivisible(testObject.arrayLengthy)).toBe(false)
    expect(isIndivisible(testObject.objectEmpty)).toBe(false)
    expect(isIndivisible(testObject.objectTrivial)).toBe(false)
    expect(isIndivisible(testObject.objectRelevant)).toBe(false)
    expect(isIndivisible(testObject.dateToday)).toBe(false)
})
