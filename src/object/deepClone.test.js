import { deepClone } from './deepClone.js'

let date = new Date('2006-01-28T05:32:00')
const testObject = {
    aNumber: 324,
    anArray: [5, { a: 'a', b: null, c: NaN }, 'yes'],
    anObject: {
        location: 'belarus',
        sequence: [1, 2, undefined, 5, Infinity],
        symbol: Symbol(['x', 13, 5]),
        cause: ['covid', 19],
    },
    aFunction: function (a, b) {
        return a * b
    },
    aDate: date,
    aRegexp: /^abc/gi,
}

const clonedCopy = deepClone(testObject)

test('clone returns the same values', () => {
    expect(testObject.aNumber).toEqual(clonedCopy.aNumber) // toEqual: same values
    expect(testObject.aNumber).toBe(clonedCopy.aNumber) // toBe: same identity
    expect(testObject.anArray[0]).toBe(clonedCopy.anArray[0])
    expect(testObject.anArray[1].a).toBe(clonedCopy.anArray[1].a)
    expect(testObject.anArray[2]).toBe(clonedCopy.anArray[2])
    expect(testObject.anArray).toEqual(clonedCopy.anArray)
    expect(testObject.anArray).not.toBe(clonedCopy.anArray)
    expect(testObject.anObject.location).toBe(clonedCopy.anObject.location)
    expect(testObject.anObject.symbol).toBe(clonedCopy.anObject.symbol)
    expect(testObject.anObject.cause[0]).toBe(clonedCopy.anObject.cause[0])
    expect(testObject.anObject).toEqual(clonedCopy.anObject)
    expect(testObject.anObject).not.toBe(clonedCopy.anObject)
    expect(testObject.aFunction).toEqual(clonedCopy.aFunction)
    expect(testObject.aFunction).toBe(clonedCopy.aFunction)
    expect(testObject.aDate).toEqual(clonedCopy.aDate)
    expect(testObject.aDate.getTime()).toBe(clonedCopy.aDate.getTime())
    expect(testObject.aDate).not.toBe(clonedCopy.aDate)
    expect(testObject.aRegexp).toEqual(clonedCopy.aRegexp)
    expect(testObject.aRegexp).not.toBe(clonedCopy.aRegexp)
})

test('clone is not a reference to the origin', () => {
    expect(testObject).toEqual(clonedCopy)
    expect(testObject).not.toBe(clonedCopy)
})

test('clone inherits the prototype of the origin', () => {
    expect(testObject.__proto__).toBe(clonedCopy.__proto__)
})
