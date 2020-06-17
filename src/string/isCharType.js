
/**
 * Helper Test for being a string with length 1
 * @param {String} char
 * @returns {Boolean} is a single character
 */
const isChar = char => {
    return Boolean(char && typeof char === 'string' && char.length === 1)
}

/**
 * Test for being a string representation of a digit
 * @param {String} char
 * @returns {Boolean} is a number 0-9
 */
const isDigit = char => {
    return isChar(char) && Boolean(char.match(/[0-9]/))
}

/**
 * Test for being a letter
 * @param {String} char
 * @returns {Boolaen} char is a letter
 */
const isLetter = char => {
    return isChar(char) && char.toLowerCase() !== char.toUpperCase()
}

/**
 * Test for being a lowercase letter
 * @param {String} char
 * @returns {Boolaen} char is a lower-case letter
 */
const isLower = char => {
    return (
        isChar(char) &&
        char === char.toLowerCase() &&
        char !== char.toUpperCase()
    )
}

/**
 * Test for being an uppercase letter
 * @param {String} char
 * @returns {Boolaen} char is a upper-case letter
 */
const isUpper = char => {
    return (
        isChar(char) &&
        char === char.toUpperCase() &&
        char !== char.toLowerCase()
    )
}

export { isChar, isDigit, isLetter, isLower, isUpper }
