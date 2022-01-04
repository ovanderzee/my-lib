/**
 * @jest-environment jsdom
 */

import { isAttachedToDom } from './isAttachedToDom'

test('isAttachedToDom tests an html-element being inside the DOM', () => {
    // beware, the ShadowRoot has been mocked
    let newElement = document.createElement('div')
    expect(isAttachedToDom(newElement)).toBe(false)

    document.body.appendChild(newElement)

    expect(isAttachedToDom(newElement)).toBe(true)

    document.body.removeChild(newElement)

    expect(isAttachedToDom(newElement)).toBe(false)
})
