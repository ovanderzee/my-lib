/**
 * Position element in a two columns, three rows grid of the viewport
 * @param {HTMLElement} target - the element to position
 * @param {Number} offset - distance to maintain
 * @return {Object} specialised functions
 */
const viewPosition = function (target, offset) {
    const docRoot = document.documentElement
    target.style.position = 'fixed'
    offset = typeof offset !== 'number' ? offset : 16

    /**
     * Position at center side of pointer
     * Good for hints (small, near pointer)
     * @param {Object} event - mouse event
     */
    const pointer = function (event) {
        event.stopPropagation()

        if (event.clientX / docRoot.clientWidth < 0.5) {
            // pointer at left, position right of pointer
            target.style.left = `${event.clientX + offset}px`
            target.style.right = 'auto'
        } else {
            // pointer at right, position left of pointer
            target.style.left = 'auto'
            target.style.right = `${
                docRoot.clientWidth - event.clientX + offset
            }px`
        }

        const ySpace = (docRoot.clientHeight - target.clientHeight) / 2

        if (event.clientY < ySpace - offset) {
            // pointer at top, position under pointer
            target.style.top = `${event.clientY + offset}px`
            target.style.bottom = 'auto'
        } else if (event.clientY < ySpace + offset + target.clientHeight) {
            // pointer in middle, position aside of pointer
            target.style.top = `${ySpace}px`
            target.style.bottom = 'auto'
        } else {
            // pointer at bottom, position above pointer
            target.style.top = 'auto'
            target.style.bottom = `${
                docRoot.clientHeight - event.clientY + offset
            }px`
        }
    }

    /**
     * Position left or right of viewport
     * Good when with a lot of information (wide)
     * or when presenting for an audience (same position)
     * @param {Object} event - mouse event
     */
    const aside = function (event) {
        event.stopPropagation()

        if (event.clientX / docRoot.clientWidth < 0.5) {
            // pointer at left, position in right column
            target.style.left = 'auto'
            target.style.right = `${offset}px`
        } else {
            // pointer at right, position in left column
            target.style.left = `${offset}px`
            target.style.right = 'auto'
        }

        // average space above and beneath the element
        const ySpace = (docRoot.clientHeight - target.clientHeight) / 2

        if (event.clientY < ySpace - offset) {
            // pointer at top, position in bottom
            target.style.top = 'auto'
            target.style.bottom = `${offset}px`
        } else if (event.clientY < ySpace + offset + target.clientHeight) {
            // pointer in middle, position aside of pointer
            target.style.top = `${ySpace}px`
            target.style.bottom = 'auto'
        } else {
            // pointer at bottom, position in top
            target.style.top = `${offset}px`
            target.style.bottom = 'auto'
        }
    }

    return {
        aside: aside,
        pointer: pointer,
    }
}

export { viewPosition }

// TODO
// make it useable in portrait screens
// return a style object apply it with Object.assign
// look at pointer events
// aside == edge

// horizontalLandscapeCentric  2 col
// horizontalSquareCentric
// horizontalPortaitCentric
// verticalLandscapeCentric  3 row
// verticalSquareCentric
// verticalPortaitCentric
