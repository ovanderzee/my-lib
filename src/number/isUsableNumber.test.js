import { isUsableNumber } from './isUsableNumber'

describe('isUsableNumber', () => {
    test('tests for numbers', () => {
        expect(isUsableNumber(74524)).toBe(true)
        expect(isUsableNumber(3.4e-34)).toBe(true)
        expect(isUsableNumber(0)).toBe(true)
        expect(
            isUsableNumber(
                -3210374564590128345611235677537829309.3456478980891286553928745,
            ),
        ).toBe(true)
    })

    test('tests for numbers outside the decimal base', () => {
        expect(isUsableNumber(0b1)).toBe(true)
        expect(isUsableNumber(0o7)).toBe(true)
        expect(isUsableNumber(0xf)).toBe(true)
    })

    test('declines special cases', () => {
        expect(isUsableNumber(Infinity)).toBe(false)
        expect(isUsableNumber(-Infinity)).toBe(false)
        expect(isUsableNumber(NaN)).toBe(false)
        expect(isUsableNumber(null)).toBe(false)
        expect(isUsableNumber(undefined)).toBe(false)
    })

    test('declines primitives evaluating to numbers', () => {
        expect(isUsableNumber('1634')).toBe(false)
        expect(isUsableNumber('')).toBe(false)
        expect(isUsableNumber(true)).toBe(false)
        expect(isUsableNumber(false)).toBe(false)
    })

    test('declines objects evaluating to numbers', () => {
        expect(isUsableNumber(new Date())).toBe(false)
        expect(isUsableNumber([])).toBe(false)
        expect(isUsableNumber([undefined])).toBe(false)
        expect(isUsableNumber([3])).toBe(false)
    })

    it('isUsableNumber tests zero or more values', () => {
        expect(isUsableNumber()).toBe(false)
        expect(isUsableNumber(1, 2, 3)).toBe(true)
        expect(isUsableNumber(5, 'x')).toBe(false)
        expect(isUsableNumber(undefined, NaN)).toBe(false)
    })
})
