import { isWrappedPrimitive } from './isWrappedPrimitive'

/**
 * Check value for indivisible:
 * string, number, boolean, bigint, symbol, undefined, null, function
 * @param {unknown} value - unknown value to test
 * @returns {boolean}
 */
const isFundamental = function (value: unknown): boolean {
    // in general, not an object
    let result = typeof value !== 'object'
    // but include null and 'newed' primitives
    result = result || value === null || isWrappedPrimitive(value)
    return result
}

export { isFundamental }
