import { testObject } from './_.js'
import { isWrappedPrimitive } from './isWrappedPrimitive.js'

test('isWrappedPrimitive accepts wrapped primitives', () => {
    expect(isWrappedPrimitive(testObject.booleanNew)).toBe(true)
    expect(isWrappedPrimitive(testObject.numericNew)).toBe(true)
    expect(isWrappedPrimitive(testObject.stringNew)).toBe(true)
})

test('isWrappedPrimitive rejects:', () => {
    expect(isWrappedPrimitive(testObject.valueUndefined)).toBe(false)
    expect(isWrappedPrimitive(testObject.valueNull)).toBe(false)
    expect(isWrappedPrimitive(testObject.booleanTrue)).toBe(false)
    expect(isWrappedPrimitive(testObject.booleanFalse)).toBe(false)
    expect(isWrappedPrimitive(testObject.numericNaN)).toBe(false)
    expect(isWrappedPrimitive(testObject.numericInfinity)).toBe(false)
    expect(isWrappedPrimitive(testObject.numericZero)).toBe(false)
    expect(isWrappedPrimitive(testObject.numericBinary)).toBe(false)
    expect(isWrappedPrimitive(testObject.numericOctal)).toBe(false)
    expect(isWrappedPrimitive(testObject.numericDecimal)).toBe(false)
    expect(isWrappedPrimitive(testObject.numericHexadecimal)).toBe(false)
    expect(isWrappedPrimitive(testObject.stringNone)).toBe(false)
    expect(isWrappedPrimitive(testObject.stringLengthy)).toBe(false)
    expect(isWrappedPrimitive(testObject.arrayEmpty)).toBe(false)
    expect(isWrappedPrimitive(testObject.arrayLengthy)).toBe(false)
    expect(isWrappedPrimitive(testObject.objectEmpty)).toBe(false)
    expect(isWrappedPrimitive(testObject.objectTrivial)).toBe(false)
    expect(isWrappedPrimitive(testObject.objectRelevant)).toBe(false)
    expect(isWrappedPrimitive(testObject.functionNoop)).toBe(false)
    expect(isWrappedPrimitive(testObject.dateToday)).toBe(false)
    expect(isWrappedPrimitive(testObject.dateTodayString)).toBe(false)
    expect(isWrappedPrimitive(testObject.regexp)).toBe(false)
    expect(isWrappedPrimitive(testObject.symbolAlpha)).toBe(false)
})
