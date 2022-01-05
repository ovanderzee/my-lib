/**
 * Process comma separated list to a sanitised array with normalised strings
 * @param {string} commaSeperatedList
 * @returns {string[]} array with separate strings
 */
const arrayFromCommaSeparatedList = function (commaSeparatedList: string): string[] {
    let list = commaSeparatedList.split(',')
    // normalise
    let trimmed = list.map((item) => item.trim().replace(/\s+/g, ' '))
    // sanitise
    return trimmed.filter((item) => {
        return item.length
    })
}

export { arrayFromCommaSeparatedList }
