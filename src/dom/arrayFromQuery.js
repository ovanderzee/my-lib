/**
 * Create a genuine array from a css-query
 * @param {string} cssQuery
 * @returns {Node[]} array with (HTML)Elements
 */
const arrayFromQuery = function (cssQuery) {
    // the push.apply operation is in most browsers among the fastest
    // https://jsperf.com/nodelist-to-array/27
    let elementArray = []
    elementArray.push.apply(elementArray, document.querySelectorAll(cssQuery))
    return elementArray
}

export { arrayFromQuery }
