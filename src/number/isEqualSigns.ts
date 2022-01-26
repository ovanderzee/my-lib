/**
 * Check all arguments for being a number with the same sign
 * (Zero is sign-neutral)
 * @param {Arguments} nums - numeric arguments
 * @return {boolean} equality
 */
const isEqualSigns = function (...nums: number[]): boolean {
    let positives: number[] = [...nums].filter((arg) => arg >= 0)
    let negatives: number[] = [...nums].filter((arg) => arg <= 0)
    return (
        positives.length === nums.length ||
        negatives.length === nums.length
    )
}

export { isEqualSigns }
