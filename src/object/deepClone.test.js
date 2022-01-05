import { deepClone } from './deepClone'

let date = new Date('2006-01-28T05:32:00')
const testObject = {
    aNumber: 324,
    anArray: [5, { a: 'a', b: null, c: NaN }, 'yes'],
    anObject: {
        location: 'belarus',
        sequence: [1, 2, undefined, 5, Infinity],
        symbol: Symbol(['x', 13, 5]),
    },
    aFunction: function (a, b) {
        return a * b
    },
    aDate: date,
    aRegexp: /^abc/gi,
}

const clonedCopy = deepClone(testObject)

test('clone returns the same values', () => {
    // toEqual: same values, toBe: Object.is-sameness
    expect(testObject.aNumber).toEqual(clonedCopy.aNumber)
    expect(testObject.aNumber).toBe(clonedCopy.aNumber) // primitive
    expect(testObject.anArray[0]).toBe(clonedCopy.anArray[0]) // primitive
    expect(testObject.anArray[1]).toEqual(clonedCopy.anArray[1])
    expect(testObject.anArray[1]).not.toBe(clonedCopy.anArray[1]) // object
    expect(testObject.anArray[1].a).toBe(clonedCopy.anArray[1].a) // primitive
    expect(testObject.anArray[1].b).toBe(clonedCopy.anArray[1].b) // null
    expect(testObject.anArray[1].c).toBe(clonedCopy.anArray[1].c) // primitive
    expect(testObject.anArray[2]).toBe(clonedCopy.anArray[2]) // primitive
    expect(testObject.anArray).toEqual(clonedCopy.anArray)
    expect(testObject.anArray).not.toBe(clonedCopy.anArray) // object
    expect(testObject.anObject.location).toBe(clonedCopy.anObject.location) // primitive
    expect(testObject.anObject.sequence[2]).toBe(
        clonedCopy.anObject.sequence[2],
    ) // undefined
    expect(testObject.anObject.sequence).toEqual(clonedCopy.anObject.sequence)
    expect(testObject.anObject.sequence).not.toBe(clonedCopy.anObject.sequence) // primitive
    expect(testObject.anObject.symbol).toBe(clonedCopy.anObject.symbol) // primitive
    expect(testObject.anObject).toEqual(clonedCopy.anObject)
    expect(testObject.anObject).not.toBe(clonedCopy.anObject) // object
    expect(testObject.aFunction).toEqual(clonedCopy.aFunction)
    expect(testObject.aFunction).toBe(clonedCopy.aFunction) // indivisible
    expect(testObject.aDate).toEqual(clonedCopy.aDate)
    expect(testObject.aDate).not.toBe(clonedCopy.aDate)
    expect(testObject.aDate.getTime()).toBe(clonedCopy.aDate.getTime()) // copy works the same
    expect(testObject.aDate).not.toBe(clonedCopy.aDate)
    expect(testObject.aRegexp).toEqual(clonedCopy.aRegexp)
    expect(testObject.aRegexp).not.toBe(clonedCopy.aRegexp)
    expect(testObject.aRegexp.toString()).toBe(clonedCopy.aRegexp.toString()) // copy works the same
})

test('clone is not a reference to the origin', () => {
    expect(testObject).toEqual(clonedCopy)
    expect(testObject).not.toBe(clonedCopy)
})

test('clone inherits the prototype of the origin', () => {
    expect(testObject.__proto__).toBe(clonedCopy.__proto__)
})
