/**
 * Test value for being a character; a string with a length of one
 * @param {string} char
 * @returns {boolean} is a single character
 */
const isChar = (char: string): boolean => {
    return Boolean(char && typeof char === 'string' && char.length === 1)
}

/**
 * Test value for being a string representation of a digit
 * @param {string} char
 * @returns {boolean} is a number 0-9
 */
const isDigit = (char: string): boolean => {
    return isChar(char) && Boolean(char.match(/[0-9]/))
}

/**
 * Test value for being a letter
 * @param {string} char
 * @returns {boolean} char is a letter
 */
const isLetter = (char: string): boolean => {
    return isChar(char) && char.toLowerCase() !== char.toUpperCase()
}

/**
 * Test value for being a lowercase letter
 * @param {string} char
 * @returns {boolean} char is a lower-case letter
 */
const isLower = (char: string): boolean => {
    return (
        isChar(char) &&
        char === char.toLowerCase() &&
        char !== char.toUpperCase()
    )
}

/**
 * Test value for being an uppercase letter
 * @param {string} char
 * @returns {boolean} char is a upper-case letter
 */
const isUpper = (char: string): boolean => {
    return (
        isChar(char) &&
        char === char.toUpperCase() &&
        char !== char.toLowerCase()
    )
}

export { isChar, isDigit, isLetter, isLower, isUpper }
