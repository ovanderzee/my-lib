/**
 * Check node for being part of the DOM
 * @param {Node} node
 * @returns {boolean} true when the node is on the webpage
 */
const isAttachedToDom = function (elm) {
    return (
        elm &&
        (elm.getRootNode() instanceof Document ||
            elm.getRootNode() instanceof ShadowRoot)
    )
}

export { isAttachedToDom }
