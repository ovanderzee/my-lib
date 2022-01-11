/**
 * Round at decimals
 * @param {number} origin - any number to round
 * @param {number} decimals - number of decimals to round at
 * @returns {number} the rounded number
 */
const roundAtDecimals = function (origin: number, decimals: number): number {
    // when the returned value would be 0.000...00
    /* @ts-ignore */
    if (origin < 1 + 'e-' + decimals && origin > -1 + 'e-' + decimals) {
        return 0
    }
    // https://www.jacklmoore.com/notes/rounding-in-javascript/
    /* @ts-ignore */
    return Number(Math.round(origin + 'e' + decimals) + 'e-' + decimals)
}

/**
 * Round at digits to exponential notation; round with significance
 * @param {number} origin - any number to round
 * @param {number} digits - number of significant digits to round at
 * @returns {string} the rounded number as exponent
 */
const roundAtDigitsExponent = function (origin: number, digits: number): string {
    if (isNaN(origin) || !Number.isInteger(digits) || digits < 1) return 'NaN'

    const absolute = Math.abs(origin)
    if (absolute === 0) return '0'
    if (absolute === Infinity) return String(origin)

    const exponent = Math.floor(Math.log(absolute) / Math.log(10))
    const coefficient = origin / Math.pow(10, exponent)
    const rounded = roundAtDecimals(coefficient, digits - 1)

    return rounded + 'e' + exponent
}

/**
 * Round at digits; round with significance
 * @param {number} origin - any number to round
 * @param {number} digits - number of significant digits to round at
 * @returns {number} the rounded number
 */
const roundAtDigits = function (origin: number, digits: number): number {
    const expString = roundAtDigitsExponent(origin, digits)
    return Number(expString)
}

export { roundAtDecimals, roundAtDigitsExponent, roundAtDigits }
