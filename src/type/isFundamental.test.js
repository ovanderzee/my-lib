import { testObject } from './_'
import { isFundamental } from './isFundamental'

// primitives , indivisibles and wrapped primitives
test('isFundamental accepts primitives', () => {
    expect(isFundamental(testObject.valueUndefined)).toBe(true)
    expect(isFundamental(testObject.valueNull)).toBe(true)
    expect(isFundamental(testObject.booleanTrue)).toBe(true)
    expect(isFundamental(testObject.booleanFalse)).toBe(true)
    expect(isFundamental(testObject.booleanNew)).toBe(true)
    expect(isFundamental(testObject.numericBigInt)).toBe(true)
    expect(isFundamental(testObject.numericNaN)).toBe(true)
    expect(isFundamental(testObject.numericInfinity)).toBe(true)
    expect(isFundamental(testObject.numericZero)).toBe(true)
    expect(isFundamental(testObject.numericBinary)).toBe(true)
    expect(isFundamental(testObject.numericOctal)).toBe(true)
    expect(isFundamental(testObject.numericDecimal)).toBe(true)
    expect(isFundamental(testObject.numericHexadecimal)).toBe(true)
    expect(isFundamental(testObject.numericNew)).toBe(true)
    expect(isFundamental(testObject.stringNone)).toBe(true)
    expect(isFundamental(testObject.stringLengthy)).toBe(true)
    expect(isFundamental(testObject.stringNew)).toBe(true)
    expect(isFundamental(testObject.functionNoop)).toBe(true)
    expect(isFundamental(testObject.functionSomething)).toBe(true)
    expect(isFundamental(testObject.dateTodayString)).toBe(true)
    expect(isFundamental(testObject.symbolAlpha)).toBe(true)
})

// rejects other objects
test('isFundamental rejects:', () => {
    expect(isFundamental(testObject.arrayEmpty)).toBe(false)
    expect(isFundamental(testObject.arrayLengthy)).toBe(false)
    expect(isFundamental(testObject.objectEmpty)).toBe(false)
    expect(isFundamental(testObject.objectTrivial)).toBe(false)
    expect(isFundamental(testObject.objectRelevant)).toBe(false)
    expect(isFundamental(testObject.dateToday)).toBe(false)
    expect(isFundamental(testObject.regexp)).toBe(false)
})
