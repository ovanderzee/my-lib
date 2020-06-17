
/**
 * Check for a match covering the string entirely
 * @param {String} word
 * @param {RegExp} regex
 * @returns {Boolean}
 */
const isExactMatch = (word, regex) => {
    const match = word.match(regex)
    const result = match && match[0] === word
    return result
}

export { isExactMatch }
