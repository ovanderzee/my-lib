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

// TODO:
// has, delete
// setCopy, getCopy (with transformerFunction  internal . json.stringify/parse)
// importDataset, exportDataset

/**
 * Component to store data with HTMLElements without side effects
 * Stores any type of data by referance
 * @property {function} set - store named data by referance (HTMLElement, dataName, data)
 * @property {function} get - retrieve named data by referance (HTMLElement, dataName)
 */
const elementStorage = {
    set: setReference,
    get: getReference,
}

export { elementStorage }
