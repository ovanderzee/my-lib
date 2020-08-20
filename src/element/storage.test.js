import { elementStorage } from './storage.js'

describe(`elementStorage`, () => {
    let bodyElement, divElement

    beforeAll(() => {
        bodyElement = document.body
        divElement = document.createElement('div')
        bodyElement.appendChild(divElement)
    })

    test(`sets and gets the values`, () => {
        const myObject = { a: 'a', b: 'b' }
        elementStorage.set(divElement, 'test', myObject)
        const yourObject = elementStorage.get(divElement, 'test')

        expect(myObject).toBe(yourObject)
    })

    test(`sets and gets by reference`, () => {
        const myObject = { a: 'a', b: 'b' }
        elementStorage.set(divElement, 'test', myObject)
        const yourObject = elementStorage.get(divElement, 'test')
        yourObject.c = 'c'

        expect(myObject.c).toBe('c')
    })
})
