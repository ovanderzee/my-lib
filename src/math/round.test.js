import { roundAtDecimals, roundAtDigitsExponent, roundAtDigits } from './round'

test('roundAtDecimals rounds positive and negative 1.005 up', () => {
    expect(roundAtDecimals(1.005, 2)).toBe(1.01)
    expect(roundAtDecimals(-1.005, 2)).toBe(-1.0)
})

test(`roundAtDecimals defaults to zero when the absolute number
        is smaller than 10 ^ (0 - required precision)`, () => {
    const small = 0.000005
    expect(roundAtDecimals(small, 1)).toBe(0)
    expect(roundAtDecimals(0 - small, 1)).toBe(0)
    expect(roundAtDecimals(small, 5)).toBe(0)
    expect(roundAtDecimals(0 - small, 5)).toBe(0)
    expect(roundAtDecimals(small, 6)).toBe(small)
    expect(roundAtDecimals(0 - small, 6)).toBe(0 - small)
})

test(`roundAtDecimals works with zero`, () => {
    expect(roundAtDecimals(0, 5)).toBe(0)
    expect(roundAtDecimals(-0, 5)).toBe(0)
})

test(`roundAtDecimals doe not pass Infinity`, () => {
    expect(roundAtDecimals(Infinity, 3)).toBe(NaN)
    expect(roundAtDecimals(-Infinity, 3)).toBe(NaN)
})

test(`roundAtDecimals evaluates a boolean when its is false`, () => {
    expect(roundAtDecimals(true, 5)).toBe(NaN)
    expect(roundAtDecimals(false, 5)).toBe(0)
})

test(`roundAtDecimals evaluates null`, () => {
    expect(roundAtDecimals(null, 5)).toBe(0)
})

test(`roundAtDecimals returns NaN when the origin is NaN`, () => {
    expect(roundAtDecimals('blabla', 3)).toBe(NaN)
    expect(roundAtDecimals(NaN, 3)).toBe(NaN)
})

test(`roundAtDecimals returns NaN when
        the number is not an integer greater than -1`, () => {
    expect(roundAtDecimals(12.34, 0)).toBe(12)
    expect(roundAtDecimals(12.34, 1.3)).toBe(NaN)
    expect(roundAtDecimals(12.34, -5)).toBe(NaN)
})

test(`roundAtDecimals does not work with numbers greater than 1e20 or less,
        relative to the precision`, () => {
    // precision 5 significant digits
    expect(roundAtDecimals(1.005e16, 5)).toBe(NaN)
    expect(roundAtDecimals(1.005e15, 5)).toBe(1005000000000000)

    expect(roundAtDecimals(-1.005e15, 5)).toBe(-1005000000000000)
    expect(roundAtDecimals(-1.005e16, 5)).toBe(NaN)

    // precision 2 significant digits
    expect(roundAtDecimals(1.005e19, 2)).toBe(NaN)
    expect(roundAtDecimals(1.005e18, 2)).toBe(1005000000000000000)

    expect(roundAtDecimals(-1.005e18, 2)).toBe(-1005000000000000000)
    expect(roundAtDecimals(-1.005e19, 2)).toBe(NaN)
})

test(`roundAtDecimals does not work with negative or broken decimals`, () => {
    expect(roundAtDecimals(724324.34654, 0)).toBe(724324)
    expect(roundAtDecimals(724324.34654, 1.5)).toBe(NaN)
    expect(roundAtDecimals(724324.34654, -1)).toBe(NaN)
})

test(`roundAtDigitsExponent returns a string containing an 'e',
        when it not returns zero`, () => {
    expect(roundAtDigitsExponent(724324.34654, 3)).toBe('7.24e5')
    expect(roundAtDigitsExponent(-465.6759, 1)).toBe('-5e2')
    expect(roundAtDigitsExponent(0, 5)).toBe('0')
})

test(`roundAtDigitsExponent passes zero`, () => {
    expect(roundAtDigitsExponent(0, 3)).toBe('0')
})

test(`roundAtDigitsExponent passes Infinity`, () => {
    expect(roundAtDigitsExponent(Infinity, 3)).toBe('Infinity')
    expect(roundAtDigitsExponent(-Infinity, 3)).toBe('-Infinity')
})

test(`roundAtDigitsExponent evaluates a boolean`, () => {
    expect(roundAtDigitsExponent(true, 3)).toBe('1e0')
    expect(roundAtDigitsExponent(false, 3)).toBe('0')
})

test(`roundAtDigitsExponent evaluates null`, () => {
    expect(roundAtDigitsExponent(null, 3)).toBe('0')
})

test(`roundAtDigitsExponent returns NaN when the origin is NaN`, () => {
    expect(roundAtDigitsExponent('blabla', 3)).toBe('NaN')
    expect(roundAtDigitsExponent(NaN, 3)).toBe('NaN')
})

test(`roundAtDigitsExponent returns NaN when
        the number is not an integer greater than zero`, () => {
    expect(roundAtDigitsExponent(12.34, 0)).toBe('NaN')
    expect(roundAtDigitsExponent(12.34, 1.3)).toBe('NaN')
    expect(roundAtDigitsExponent(12.34, -5)).toBe('NaN')
})

test(`roundAtDigitsExponent returns zero`, () => {
    expect(roundAtDigitsExponent(0, 3)).toBe('0')
})

test(`roundAtDigits does accurate rounding`, () => {
    expect(roundAtDigits(1.005e-6, 3)).toBe(0.00000101)
    expect(roundAtDigits(-1.005e-6, 3)).toBe(-0.000001)
    expect(roundAtDigits(1.005, 3)).toBe(1.01)
    expect(roundAtDigits(-1.005, 3)).toBe(-1)
})

test(`roundAtDigits works OK with extreme numbers up till 16 digits,
        fails with higher precision`, () => {
    const num25 = 1234567890123456789012345
    expect(roundAtDigits(num25, 16)).toBe(1.234567890123457e24) // rounds OK
    expect(roundAtDigits(num25, 17)).toBe(1.234567890123457e24) // rounds too low
    expect(roundAtDigits(num25, 21)).toBe(1.234567890123457e24) // rounds too low
    expect(roundAtDigits(num25, 22)).toBe(NaN)
    const num50 = 12345678901234567890123456789012345678901234567890
    expect(roundAtDigits(num50, 16)).toBe(1.234567890123457e49) // rounds OK
    expect(roundAtDigits(num50, 17)).toBe(1.2345678901234564e49) // rounds wrong
    expect(roundAtDigits(num50, 21)).toBe(1.2345678901234564e49) // rounds too low
    expect(roundAtDigits(num50, 22)).toBe(NaN)
    const num109 = 1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789
    expect(roundAtDigits(num109, 16)).toBe(1.234567890123457e108) // rounds OK
    expect(roundAtDigits(num109, 17)).toBe(1.234567890123457e108) // rounds too low
    expect(roundAtDigits(num109, 21)).toBe(1.234567890123457e108) // rounds too low
    expect(roundAtDigits(num109, 22)).toBe(NaN)
})
