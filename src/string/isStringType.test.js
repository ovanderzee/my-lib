import { isAlphaNumeric } from './isStringType'

describe('isAlphaNumeric accepts any combination of letters or digits', () => {
    test('isAlphaNumeric accepts any combination of letters or digits, regardsless of casing and diacritics', () => {
        expect(isAlphaNumeric('abcdefg')).toBeTruthy()
        expect(isAlphaNumeric('Abcdefg')).toBeTruthy()
        expect(isAlphaNumeric('ABCDEFG')).toBeTruthy()
        expect(isAlphaNumeric('1234567')).toBeTruthy()
        expect(isAlphaNumeric('abc123')).toBeTruthy()
        expect(isAlphaNumeric('Abc123')).toBeTruthy()
        expect(isAlphaNumeric('ABC123')).toBeTruthy()
        expect(isAlphaNumeric('123abc')).toBeTruthy()
        expect(isAlphaNumeric('123Abc')).toBeTruthy()
        expect(isAlphaNumeric('123ABC')).toBeTruthy()
    })

    test('isAlphaNumeric rejects other strings', () => {
        expect(isAlphaNumeric('')).toBeFalsy()
        expect(isAlphaNumeric('abc ')).toBeFalsy()
        expect(isAlphaNumeric(' 123')).toBeFalsy()
        expect(isAlphaNumeric('@A1')).toBeFalsy()
        expect(isAlphaNumeric('c3_')).toBeFalsy()
    })

    test('isAlphaNumeric rejects other types', () => {
        expect(isAlphaNumeric(0)).toBeFalsy()
        expect(isAlphaNumeric(4)).toBeFalsy()
        expect(isAlphaNumeric(17)).toBeFalsy()
        expect(isAlphaNumeric(false)).toBeFalsy()
        expect(isAlphaNumeric(true)).toBeFalsy()
        expect(isAlphaNumeric(undefined)).toBeFalsy()
        expect(isAlphaNumeric([])).toBeFalsy()
        expect(isAlphaNumeric([1, 2, 3])).toBeFalsy()
        expect(isAlphaNumeric(null)).toBeFalsy()
        expect(isAlphaNumeric({})).toBeFalsy()
        expect(isAlphaNumeric({ a: 1, b: 2, c: 3 })).toBeFalsy()
    })
})
