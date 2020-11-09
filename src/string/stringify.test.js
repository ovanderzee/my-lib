import { stringify } from './stringify'

// TODO: spy on primitive methods
// TODO: spy on String construction function

describe('stringify converts using toString method of the prototype', () => {
    test('for example a date', () => {
        const aDate = new Date('28 jan 2006 05:32 GMT+1')
        const spyDateToString = jest.spyOn(aDate, 'toString')
        const dateString = stringify(aDate)
        console.log(dateString)

        expect(dateString.startsWith('Sat Jan 28 2006 05:32:00')).toBeTruthy()
        expect(spyDateToString).toHaveBeenCalled()
    })

    test('for example a RegExp', () => {
        const aRegExp = /^/g
        const spyRegExpToString = jest.spyOn(aRegExp, 'toString')
        const regexpString = stringify(aRegExp)

        expect(regexpString).toBe('/^/g')
        expect(spyRegExpToString).toHaveBeenCalled()
    })

    test('for example a String', () => {
        const aString = 'Hello World!'
        // Cannot spyOn on a primitive value; string given
        // const spyStringToString = jest.spyOn(aString, 'toString')
        const resultString = stringify(aString)

        expect(resultString).toBe('Hello World!')
        // expect(spyStringToString).toHaveBeenCalled()
    })

    test('for example a Number', () => {
        const aNumber = Math.PI
        const numberString = stringify(aNumber)

        expect(numberString).toBe('3.141592653589793')
    })

    test('for example Infinity', () => {
        const aNumber = 1 / 0
        const numberString = stringify(aNumber)

        expect(numberString).toBe('Infinity')
    })
})

describe('stringify uses forceStringify when toString is no available', () => {
    String.constructor = jest.fn()

    test('for example with undefined', () => {
        const undefValue = undefined
        const spyJsonStringify = jest.spyOn(JSON, 'stringify')
        const undefString = stringify(undefValue)

        expect(undefString).toBe('undefined')
        expect(spyJsonStringify).not.toHaveBeenCalled()
    })

    test('for example with null', () => {
        const nullValue = null
        const spyJsonStringify = jest.spyOn(JSON, 'stringify')
        // const spyStringConstruction = jest.spyOn(String, 'constructor')
        const nullString = stringify(nullValue)

        expect(nullString).toBe('null')
        expect(spyJsonStringify).not.toHaveBeenCalled()
        // expect(spyStringConstruction).toHaveBeenCalled()
    })

    test('for example with Object.create(null)', () => {
        const createNullValue = Object.create(null)
        const spyJsonStringify = jest.spyOn(JSON, 'stringify')
        const createNullString = stringify(createNullValue)

        expect(createNullString).toBe('{}')
        expect(spyJsonStringify).toHaveBeenCalled()
    })
})
