/**
 * Try generic ways to produce a string, an empty string if necessary
 * @param {any} value
 * @return {String} string represention of anything
 */
const forceStringify = function (value) {
    try {
        // this first for the sake of undefined
        return String(value)
    } catch (e) {
        try {
            return JSON.stringify(value)
        } catch (f) {
            return ''
        }
    }
}

/**
 * Convert anything to a string, an empty string if necessary
 * @param {any} value
 * @return {String} string represention of anything
 */
const stringify = function (value) {
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
