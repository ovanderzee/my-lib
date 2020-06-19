import { isPrimitive } from './isPrimitive.js'

const testObject = {
    aBoolean: true,
    aString: 'yep',
    aNaN: NaN,
    aNull: null,
    aNumber: 3.14,
    anUndefined: undefined,
    anArray: [1, 2, 3],
    anObject: { a: 1, b: 'b' },
    aFunction: () => {},
    aDate: new Date(),
    aDateString: Date(),
    aSyombol: Symbol('alpha'),
}

test('isPrimitive accepts primitives', () => {
    expect(isPrimitive(testObject.aBoolean)).toBe(true)
    expect(isPrimitive(testObject.aString)).toBe(true)
    expect(isPrimitive(testObject.aNaN)).toBe(true)
    expect(isPrimitive(testObject.aNumber)).toBe(true)
    expect(isPrimitive(testObject.aDateString)).toBe(true)
})

test('isPrimitive rejects non-primitives', () => {
    expect(isPrimitive(testObject.aNull)).toBe(false)
    expect(isPrimitive(testObject.anUndefined)).toBe(false)
    expect(isPrimitive(testObject.anArray)).toBe(false)
    expect(isPrimitive(testObject.anObject)).toBe(false)
    expect(isPrimitive(testObject.aFunction)).toBe(false)
    expect(isPrimitive(testObject.aDate)).toBe(false)
    expect(isPrimitive(testObject.aSyombol)).toBe(false)
})
