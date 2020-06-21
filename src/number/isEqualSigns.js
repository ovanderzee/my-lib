/**
 * Check all arguments for being a number with the same sign
 * @param {Arguments} numeric arguments
 * @return {boolean} equality
 */
const isEqualSigns = function () {
    let positives = [...arguments].filter((arg) => arg >= 0)
    let negatives = [...arguments].filter((arg) => arg <= 0)
    return (
        positives.length === arguments.length ||
        negatives.length === arguments.length
    )
}

export { isEqualSigns }
