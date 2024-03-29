const testObject = {
    valueUndefined: undefined,
    valueNull: null,
    booleanFalse: false,
    booleanTrue: true,
    booleanNew: new Boolean(true),
    numericBigInt: 123n,
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
    /* @ts-ignore */
    functionNoop: () => {},
    functionSomething: (a, b) => [a, b],
    dateToday: new Date(),
    dateTodayString: Date(),
    regexp: /^\d+$/gi,
    symbolAlpha: Symbol('alpha'),
}

export { testObject }
