/**
 * Create a genuine array from a css-query
 * @param {string} cssQuery
 * @returns {Node[]} array with Elements
 */
const arrayFromQuery = function (cssQuery: string): Node[] {
    // the push.apply operation is in most browsers among the fastest
    // https://jsperf.com/nodelist-to-array/27
    const elementArray: Node[] = []
    const nodeList: NodeListOf<Node> = document.querySelectorAll(cssQuery)
    elementArray.push(...Array.from(nodeList))
    return elementArray
}

export { arrayFromQuery }
