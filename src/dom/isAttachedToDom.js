/**
 * Check for the node being inside the DOM
 * @param {Node} node
 * @returns {Boolean} true when the node is onscreen -- not removed
 */
const isAttachedToDom = function (elm) {
    return (
        elm &&
        (elm.getRootNode() instanceof Document ||
            elm.getRootNode() instanceof ShadowRoot)
    )
}

export { isAttachedToDom }
