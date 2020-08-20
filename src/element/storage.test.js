import { elementStorage } from './storage.js'

describe(`elementStorage on elements that exist in the DOM`, () => {
    let bodyElement, divElement
    const startObject = { a: 'a', b: 'b' }

    beforeAll(() => {
        bodyElement = document.body
        divElement = document.createElement('div')
        bodyElement.appendChild(divElement)
        elementStorage.set(divElement, 'test', startObject)
    })

    test(`sets and gets the values`, () => {
        const returnedObject = elementStorage.get(divElement, 'test')

        expect(startObject).toBe(returnedObject)
    })

    test(`sets and gets by reference`, () => {
        const returnedObject = elementStorage.get(divElement, 'test')
        returnedObject.c = 'c'

        expect(startObject.c).toBe('c')
    })

    test(`has the values returns boolean`, () => {
        const divElementHasTest = elementStorage.has(divElement, 'test')
        const divElementHasCheck = elementStorage.has(divElement, 'check')

        expect(divElementHasTest).toBe(true)
        expect(divElementHasCheck).toBe(false)
    })

    test(`delete a record`, () => {
        elementStorage.set(divElement, 'check', startObject)
        const initialHasCheck = elementStorage.has(divElement, 'check')

        expect(initialHasCheck).toBe(true)

        elementStorage.delete(divElement, 'check', startObject)
        const deletedHasCheck = elementStorage.has(divElement, 'check')

        expect(deletedHasCheck).toBe(false)
    })
})

describe(`elementStorage on elements that only exist memory`, () => {
    let virtualElement1, virtualElement2
    const startObject1 = { a: 'a', b: 'b' }
    const startObject2 = { v: 'v', w: 'w' }

    beforeAll(() => {
        virtualElement1 = document.createElement('video')
        virtualElement2 = document.createElement('video')
        elementStorage.set(virtualElement1, 'test', startObject1)
        elementStorage.set(virtualElement2, 'test', startObject2)
    })

    test(`respond the same way as those in the DOM`, () => {
        const returnedObject1 = elementStorage.get(virtualElement1, 'test')
        const returnedObject2 = elementStorage.get(virtualElement2, 'test')

        expect(startObject1).toBe(returnedObject1)
        expect(startObject2).toBe(returnedObject2)
    })
})

describe(`elementStorage on referenced deleted elements`, () => {
    let bodyElement, targetElement1, targetElement2
    const startObject1 = { a: 'a', b: 'b' }
    const startObject2 = { v: 'v', w: 'w' }

    beforeAll(() => {
        bodyElement = document.body
        targetElement1 = document.createElement('table')
        targetElement2 = document.createElement('table')
        bodyElement.appendChild(targetElement1)
        bodyElement.appendChild(targetElement2)
        elementStorage.set(targetElement1, 'test', startObject1)
        elementStorage.set(targetElement2, 'test', startObject2)
        bodyElement.removeChild(targetElement1)
        bodyElement.removeChild(targetElement2)
    })

    test(`respond the same way as those in the DOM`, () => {
        const returnedObject1 = elementStorage.get(targetElement1, 'test')
        const returnedObject2 = elementStorage.get(targetElement2, 'test')

        expect(startObject1).toBe(returnedObject1)
        expect(startObject2).toBe(returnedObject2)
    })
})

describe(`elementStorage on elements referenced after deletion`, () => {
    let bodyElement, target, queriedBeforeDeletion, queriedAfterDeletion
    const startObject = { a: 'a', b: 'b' }

    beforeAll(() => {
        bodyElement = document.body
        target = document.createElement('table')
        target.id = 'overview'
        bodyElement.appendChild(target)
        elementStorage.set(target, 'test', startObject)
        queriedBeforeDeletion = document.getElementById('overview')
        bodyElement.removeChild(target)
        queriedAfterDeletion = document.getElementById('overview')
    })

    test(`get does not respond nor error`, () => {
        const returnedObject = elementStorage.get(queriedAfterDeletion, 'test')

        expect(returnedObject).toBe(undefined)
    })

    test(`has and delete do not respond nor error`, () => {
        const initialHasTest = elementStorage.has(queriedAfterDeletion, 'test')

        expect(initialHasTest).toBe(false)

        elementStorage.delete(queriedAfterDeletion, 'test')

        const deletedHasTest = elementStorage.has(queriedAfterDeletion, 'test')

        expect(deletedHasTest).toBe(false)
    })
})
