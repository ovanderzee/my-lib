/**
 * Find the intersection of two arrays
 * @param {Array} array1
 * @param {Array} array2
 * @return {Array}
 */
const arrayIntersection = function (array1, array2) {
    let lookup = {}
    array1.forEach((member) => (lookup[member] = 1))
    return array2.filter((member) => {
        if (lookup[member] === 1) {
            delete lookup[member]
            return member
        }
    })
}
export { arrayIntersection }
