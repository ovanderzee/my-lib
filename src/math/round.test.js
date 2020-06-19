import { roundAtDecimals, roundAtDigits } from './round'

test('roundAtDecimals rounds positive and negative 1.005 up', () => {
    expect(roundAtDecimals(1.005, 2)).toBe(1.01)
    expect(roundAtDecimals(-1.005, 2)).toBe(-1.0)
})

test(`roundAtDecimals defaults to zero when the absolute number
        is smaller than the required precision`, () => {
    expect(roundAtDecimals(1.2e-34, 2)).toBe(0)
    expect(roundAtDecimals(-1.2e-34, 2)).toBe(0)
})

test(`roundAtDecimals does not work with number about greater than 1e18`, () => {
    expect(roundAtDecimals(1.005e19, 2)).toBe(NaN)
    expect(roundAtDecimals(1.005e18, 2)).toBe(1005000000000000000)

    expect(roundAtDecimals(-1.005e18, 2)).toBe(-1005000000000000000)
    expect(roundAtDecimals(-1.005e19, 2)).toBe(NaN)
})

test(`roundAtDigits does work`, () => {
    expect(roundAtDigits(1.23456, 4)).toBe(1.235)
    expect(roundAtDigits(-1.23456, 4)).toBe(-1.235)
    expect(roundAtDigits(1.005e-6, 3)).toBe(0.00000101)
    expect(roundAtDigits(-1.005e-6, 3)).toBe(-0.000001)
    expect(roundAtDigits(1.005, 3)).toBe(1.01)
    expect(roundAtDigits(-1.005, 3)).toBe(-1)
})
