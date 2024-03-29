/**
 * Calculate sum of array with Numbers
 * @param {number[]} seq - array containing numbers
 * @return {number} the sum of the numbers
 */
const mathSum = (seq: number[]): number => seq.reduce((a, b) => a + b, 0)

/**
 * Calculate average of array with Numbers
 * @param {number[]} seq - array containing numbers
 * @return {number} the average of the numbers
 */
const mathAvg = (seq: number[]): number => mathSum(seq) / seq.length || 0

export { mathSum, mathAvg }
