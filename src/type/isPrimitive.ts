import { isWrappedPrimitive } from './isWrappedPrimitive'

/**
 * Check value for being a primitive
 * but leave out the anti-value undefined;
 * @param {unknown} value - unknown value to check
 * @returns {boolean} is a primitive
 */
const isPrimitive = function (value: unknown): boolean {
    const typePrimitive =
        typeof value === 'string' ||
        typeof value === 'number' ||
        typeof value === 'boolean' ||
        typeof value === 'bigint' ||
        typeof value === 'symbol'

    return isWrappedPrimitive(value) || typePrimitive
}

export { isPrimitive }
