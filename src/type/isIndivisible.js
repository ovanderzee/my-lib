import { isPrimitive } from './isPrimitive'

/**
 * Check value for indivisible:
 * string, number, boolean, bigint, symbol, undefined, null, function
 * @param {any} value - value to test
 * @returns {boolean}
 */
const isIndivisible = function (value) {
    let result = isPrimitive(value)
    result = result || value === undefined || value === null
    result = result || typeof value === 'function'

    return result
}

export { isIndivisible }
