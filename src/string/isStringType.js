import { isDigit, isLetter } from './isCharType'

/**
 * Test for being a string consisting of letters and/or digits
 * @param {string} word
 * @returns {boolean} consists of letters and/or digits only
 */
const isAlphaNumeric = (word) => {
    return (
        word &&
        word.split &&
        !word.split('').some((char) => {
            return !(isLetter(char) || isDigit(char))
        })
    )
}

export { isAlphaNumeric }
