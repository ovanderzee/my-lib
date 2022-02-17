import { isDigit, isLetter } from './isCharType'

/**
 * Test for being a string consisting of letters and/or digits
 * @param {string} word
 * @returns {boolean} consists of letters and/or digits only
 */
const isAlphaNumeric = (word: string): boolean => {
    return Boolean(
        word &&
            word.split &&
            !word.split('').some((char) => !(isLetter(char) || isDigit(char))),
    )
}

export { isAlphaNumeric }
