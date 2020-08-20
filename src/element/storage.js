import { hasOwnProperty } from '../object/hasOwnProperty'

const storage = new WeakMap()

/**
 * Store named data by reference
 * @private
 * @param {object} element - HTMLElement
 * @param {object} name - name for element data
 * @param {any} data - element data
 */
const setReference = function (element, name, data) {
    const allData = storage.get(element) || {}
    allData[name] = data
    storage.set(element, allData)
}

/**
 * Retrieve named data by reference
 * @private
 * @param {object} element - HTMLElement
 * @param {string} name - name for the data
 * @return {any} the data by name
 */
const getReference = function (element, name) {
    const allData = storage.get(element) || {}
    const currData = allData[name]
    return currData
}

/**
 * Check existence named data
 * @private
 * @param {object} element - HTMLElement
 * @param {string} name - name for the data
 * @return {boolean} the existence of the data by name
 */
const hasNamedData = function (element, name) {
    const allData = storage.get(element) || {}
    return hasOwnProperty(allData, name)
}

/**
 * Remove named data
 * @private
 * @param {object} element - HTMLElement
 * @param {string} name - name for the data
 */
const deleteNamedData = function (element, name) {
    const allData = storage.get(element) || {}
    delete allData[name]
}

// TODO:
// setCopy, getCopy (with transformerFunction  internal . json.stringify/parse)
// importDataset, exportDataset

/**
 * Component to store data with HTMLElements without side effects
 * Stores any type of data by referance
 * @property {function} set - store named data by referance (HTMLElement, dataName, data)
 * @property {function} get - retrieve named data by referance (HTMLElement, dataName)
 * @property {function} has - checks existence named data (HTMLElement, dataName)
 * @property {function} delete - deletes named data (HTMLElement, dataName)
 */
const elementStorage = {
    set: setReference,
    get: getReference,
    has: hasNamedData,
    delete: deleteNamedData,
}

export { elementStorage }
