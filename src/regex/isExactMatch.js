/**
 * Check for a match covering the string entirely
 * @param {string} word
 * @param {RegExp} regex
 * @returns {boolean} all characters of the word were described in regex
 */
const isExactMatch = (word, regex) => {
    const match = word.match(regex)
    const result = match && match[0] === word
    return result
}

export { isExactMatch }
