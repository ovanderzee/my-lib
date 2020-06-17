import { isDigit, isLetter } from './isCharType'

/**
 * Test for being a string consisting of letters and/or digits
 * @param {String} line
 * @returns {Boolean} consists of letters and/or digits only
 */
const isAlphaNumeric = line => {
    return (
        line &&
        line.split &&
        !line.split('').some(char => {
            return !(isLetter(char) || isDigit(char))
        })
    )
}

export { isAlphaNumeric }
