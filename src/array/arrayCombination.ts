/**
 * Find unique values from both arrays
 * @param {Array} array1
 * @param {Array} array2
 * @return {Array} the combination
 */
const arrayCombination = function (
    array1: unknown[],
    array2: unknown[],
): unknown[] {
    const concatination = [...array1, ...array2]
    const unification = new Set(concatination)
    return Array.from(unification)
}

export { arrayCombination }
