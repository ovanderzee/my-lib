import { isDigit, isLetter } from './isCharType'

/**
 * Test for being a string consisting of letters and/or digits
 * @param {string} line
 * @returns {boolean} consists of letters and/or digits only
 */
const isAlphaNumeric = (line) => {
    return (
        line &&
        line.split &&
        !line.split('').some((char) => {
            return !(isLetter(char) || isDigit(char))
        })
    )
}

export { isAlphaNumeric }
