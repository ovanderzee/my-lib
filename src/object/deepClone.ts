import { isFundamental } from '../type/isFundamental'

/**
 * Recursively copy all indivisible data to new object
 * Pay attention to Date and RegExp objects
 * @param {any} variable - any value to check
 * @returns {any} the same data with different references
 */
const deepClone = function (variable: any): any {
    let product = variable
    if (isFundamental(variable)) {
        return variable
    } else if (Array.isArray(variable)) {
        product = []
        for (const value of variable) {
            product.push(deepClone(value))
        }
    } else if (variable instanceof Date) {
        product = new Date(variable.getTime())
    } else if (variable instanceof RegExp) {
        product = new RegExp(variable.source, variable.flags)
    } else if (typeof variable === 'object') {
        product = {}
        for (const [key, value] of Object.entries(variable)) {
            product[key] = deepClone(value)
        }
    }

    return product
}

export { deepClone }
