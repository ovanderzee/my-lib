/**
 * Check for existence of property in object
 * @param {Object} object
 * @param {String} prop
 * @returns {Boolean} hasIt - object has that own property
 */
const hasOwnProperty = function (object, prop) {
    const hasIt = Object.prototype.hasOwnProperty.call(object, prop)
    return hasIt
}

export { hasOwnProperty }
