/**
 * Round at decimals
 * @param {number} origin - any number to round
 * @param {number} decimals - number of decimals to round at
 * @returns {number} the rounded number
 */
const roundAtDecimals = function (origin, decimals) {
    if (origin < 1 + 'e-' + decimals && origin > -1 + 'e-' + decimals) {
        return 0
    }
    // https://www.jacklmoore.com/notes/rounding-in-javascript/
    return Number(Math.round(origin + 'e' + decimals) + 'e-' + decimals)
}

/**
 * Round at digits; round with significance
 * @param {number} origin - any number to round
 * @param {number} digits - number of digits to round at
 * @returns {number} the rounded number
 */
const roundAtDigits = function (origin, digits) {
    const exponent = Math.floor(Math.log(Math.abs(origin)) / Math.log(10))
    const coefficient = origin / Math.pow(10, exponent)
    const rounded = roundAtDecimals(coefficient, digits - 1)

    return Number(rounded + 'e' + exponent)
}

export { roundAtDecimals, roundAtDigits }
