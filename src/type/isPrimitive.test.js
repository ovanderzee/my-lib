import { testObject } from './_'
import { hasOwnProperty } from '../object/hasOwnProperty'
import { isPrimitive } from './isPrimitive'

/**
 * Return true or false for a primitives or not for a non-primitive
 * Return name string for property unknown to the testObject
 * @private
 * @param {string} item of testObject
 * @returns {boolean | string}
 */

const isBool4PrimitiveOrNot = (item) => {
    if (!hasOwnProperty(testObject, item)) return item
    return isPrimitive(testObject[item])
}

test('isPrimitive accepts primitives and wrapped objects', () => {
    expect(isBool4PrimitiveOrNot('booleanTrue')).toBe(true)
    expect(isBool4PrimitiveOrNot('booleanFalse')).toBe(true)
    expect(isBool4PrimitiveOrNot('booleanNew')).toBe(true)
    expect(isBool4PrimitiveOrNot('numericBigInt')).toBe(true)
    expect(isBool4PrimitiveOrNot('numericNaN')).toBe(true)
    expect(isBool4PrimitiveOrNot('numericInfinity')).toBe(true)
    expect(isBool4PrimitiveOrNot('numericZero')).toBe(true)
    expect(isBool4PrimitiveOrNot('numericBinary')).toBe(true)
    expect(isBool4PrimitiveOrNot('numericOctal')).toBe(true)
    expect(isBool4PrimitiveOrNot('numericDecimal')).toBe(true)
    expect(isBool4PrimitiveOrNot('numericHexadecimal')).toBe(true)
    expect(isBool4PrimitiveOrNot('numericNew')).toBe(true)
    expect(isBool4PrimitiveOrNot('stringNone')).toBe(true)
    expect(isBool4PrimitiveOrNot('stringLengthy')).toBe(true)
    expect(isBool4PrimitiveOrNot('stringNew')).toBe(true)
    expect(isBool4PrimitiveOrNot('dateTodayString')).toBe(true)
    expect(isBool4PrimitiveOrNot('symbolAlpha')).toBe(true)
})

test('isPrimitive rejects non-primitives', () => {
    expect(isBool4PrimitiveOrNot('valueNull')).toBe(false)
    expect(isBool4PrimitiveOrNot('valueUndefined')).toBe(false)
    expect(isBool4PrimitiveOrNot('arrayEmpty')).toBe(false)
    expect(isBool4PrimitiveOrNot('arrayLengthy')).toBe(false)
    expect(isBool4PrimitiveOrNot('objectEmpty')).toBe(false)
    expect(isBool4PrimitiveOrNot('objectTrivial')).toBe(false)
    expect(isBool4PrimitiveOrNot('objectRelevant')).toBe(false)
    expect(isBool4PrimitiveOrNot('functionNoop')).toBe(false)
    expect(isBool4PrimitiveOrNot('functionSomething')).toBe(false)
    expect(isBool4PrimitiveOrNot('dateToday')).toBe(false)
    expect(isBool4PrimitiveOrNot('regexp')).toBe(false)
})
