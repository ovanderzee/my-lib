/**
 * Test for values with which calculations can be done
 * @param {Arguments} nums - one or more numeric values to test
 * @returns {boolean} every argument is a usable number
 */
const isUsableNumber = function (...nums: number[]): boolean {
    let isUsable = Boolean(nums.length)
    const numbers = Array.from(nums)
    numbers.forEach((value) => {
        isUsable =
            isUsable && typeof value === 'number' && Number.isFinite(value)
    })
    return isUsable
}

export { isUsableNumber }
