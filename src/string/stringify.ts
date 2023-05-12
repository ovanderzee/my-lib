/**
 * Helper function to produce a string, an empty string if necessary
 * @private
 * @param {unknown} value
 * @return {String} string represention of anything
 */
const finalStringify = function (value: unknown): string {
    try {
        return JSON.stringify(value)
    } catch (e) {
        return ''
    }
}

/**
 * Try generic ways to produce a string, an empty string if necessary
 * @param {any} value
 * @return {String} string represention of anything
 */
const forceStringify = function (value: any): string {
    let result
    try {
        // first coerce to string for the sake of undefined
        result = String(value)
        if (result === '[object Object]') {
            result = finalStringify(value)
        }
        return result
    } catch (e) {
        return finalStringify(value)
    }
}

/**
 * Convert anything to a string, an empty string if necessary.
 * Expect sensible but not consistent cross-environment behaviour on functions.
 * @param {any} value
 * @return {String} string represention of anything
 */
const stringify = function (value: any): string {
    let result
    try {
        result = value.toString()
        if (result === '[object Object]') {
            result = forceStringify(value)
        }
        return result
    } catch (e) {
        return forceStringify(value)
    }
}

export { forceStringify, stringify }
