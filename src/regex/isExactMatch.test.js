import { isExactMatch } from './isExactMatch'

describe('In isExactMatch the match covers the entire string', () => {
    test('multiple strings can match one regular expression', () => {
        const word1 = 'deltaE1976'
        const word2 = 'deltaE2000'
        const regex = /delta[EL]\d{4}/

        expect(isExactMatch(word1, regex)).toBeTruthy()
        expect(isExactMatch(word2, regex)).toBeTruthy()
    })

    test('the string may not match partly', () => {
        const word = 'partly'
        const regex = /part/

        expect(word.match(regex)).toBeTruthy()
        expect(isExactMatch(word, regex)).toBeFalsy()
    })
})
