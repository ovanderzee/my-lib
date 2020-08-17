import { isPrimitive } from './isPrimitive'

/**
 * Test for type indivisibility
 * @param {any} value - value to test
 * @returns {boolean} every argument is a useable number
 */
const isIndivisible = function (value) {
    let result = isPrimitive(value)
    result = result || value === undefined || value === null
    result = result || typeof value === 'function'

    return result
}

export { isIndivisible }
