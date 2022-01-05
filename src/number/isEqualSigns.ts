/**
 * Check all arguments for being a number with the same sign
 * @param {Arguments} anonymus - numeric arguments
 * @return {boolean} equality
 */
const isEqualSigns = function (): boolean {
    let positives: number[] = [...arguments].filter((arg) => arg >= 0)
    let negatives: number[] = [...arguments].filter((arg) => arg <= 0)
    return (
        positives.length === arguments.length ||
        negatives.length === arguments.length
    )
}

export { isEqualSigns }
