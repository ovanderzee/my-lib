import { isEqualSigns } from './isEqualSigns'

// signEquality

test('isEqualSigns returns true when all arguments are numbers with the sane sign, including zero', () => {
    expect(isEqualSigns(0, 1, 2, 3)).toBe(true)
    expect(isEqualSigns(0, -1, -2, -3)).toBe(true)
})

test('isEqualSigns returns true when some arguments are strings with equal signed numbers, including zero', () => {
    expect(isEqualSigns('0', '1', 2, '3')).toBe(true)
    expect(isEqualSigns('0', -1, '-2', '-3')).toBe(true)
})

test('isEqualSigns returns false when the arguments evaluate to numbers with mixed signs', () => {
    expect(isEqualSigns(0, -1, 2, -3)).toBe(false)
    expect(isEqualSigns('0', '-1', '2', '-3')).toBe(false)
})

test('isEqualSigns strips whitespace, but no other not-numerics', () => {
    expect(isEqualSigns(' 0 ', ' 1 ')).toBe(true)
    expect(isEqualSigns(' 0 ', ' 1cm ')).toBe(false)
})

test('isEqualSigns can handle array spreads', () => {
    expect(isEqualSigns(...[0, 1, 2, 3])).toBe(true)
    expect(isEqualSigns(0, 1, ...[2, 3])).toBe(true)
    expect(isEqualSigns(0, 1, ...[-2, 3])).toBe(false)
})

test("isEqualSigns can't handle arrays, sets, objects or NaN", () => {
    expect(isEqualSigns([0, 1, 2, 3])).toBe(false)
    expect(isEqualSigns(0, [1, 2, 3])).toBe(false)
    expect(isEqualSigns(0, '[1 ,2]')).toBe(false)
    expect(isEqualSigns(0, 1, new Set([1, 2, 3, 4, 5]))).toBe(false)
    expect(isEqualSigns(0, { x: 5 })).toBe(false)
    expect(isEqualSigns(0, ' {x: 5} ')).toBe(false)
})
