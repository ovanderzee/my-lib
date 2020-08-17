/**
 * Check value for being a primitive
 * but leave out the anti-value undefined;
 * @param {any} value - any value to check
 * @returns {boolean} is a primitive
 */
const isPrimitive = function (value) {
    const newPrimitive =
        typeof value === 'object' &&
        (value instanceof String ||
            value instanceof Number ||
            value instanceof Boolean)

    const typePrimitive =
        typeof value === 'string' ||
        typeof value === 'number' ||
        typeof value === 'boolean' ||
        typeof value === 'bigint' ||
        typeof value === 'symbol'

    return newPrimitive || typePrimitive
}

export { isPrimitive }
