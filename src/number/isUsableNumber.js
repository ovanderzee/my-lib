/**
 * Test for values with which calculations can be done
 * @param {Arguments} anonymous - one or more values to test
 * @returns {boolean} every argument is a usable number
 */
const isUsableNumber = function () {
    let isUsable = Boolean(arguments.length)
    Array.from(arguments).forEach((value) => {
        isUsable =
            isUsable && typeof value === 'number' && Number.isFinite(value)
    })
    return isUsable
}

export { isUsableNumber }
