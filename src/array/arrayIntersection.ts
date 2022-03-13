/**
 * Find unique values appearing in both arrays
 * @param {Array} array1
 * @param {Array} array2
 * @return {Array} the intersection
 */
const arrayIntersection = function (array1: any[], array2: any[]): any[] {
    const lookup: Record<string, number> = {}
    array1.forEach((member) => (lookup[member] = 1))
    return array2.filter((member) => {
        if (lookup[member] === 1) {
            delete lookup[member]
            return member
        }
    })
}

export { arrayIntersection }
