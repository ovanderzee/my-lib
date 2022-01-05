/**
 * Check for existence of property in object
 * @param {object} object
 * @param {string} prop
 * @returns {boolean} the object has the property as its own property -- not inheriting it
 */
const hasOwnProperty = function (object: any, prop: string): boolean {
    const hasIt = Object.prototype.hasOwnProperty.call(object, prop)
    return hasIt
}

export { hasOwnProperty }
