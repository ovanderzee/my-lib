/**
 * Check for primitives
 * @param {any} value - any value to check
 * @returns {boolean} is a primitive
 */
const isPrimitive = function (value) {
    return (
        typeof value === 'string' ||
        typeof value === 'number' ||
        typeof value === 'boolean'
    )
}

export { isPrimitive }
