import { stringify } from './stringify'

// TODO: spy on primitive methods
// TODO: spy on String construction function

describe('stringify converts using toString method of the prototype', () => {
    test('for example a date', () => {
        const aDate = new Date('28 jan 2006 05:32 GMT+1')
        const spyDateToString = jest.spyOn(aDate, 'toString')
        // "Sat Jan 28 2006 05:32:00 GMT+0100 (Midden-Europese standaardtijd)"
        const dateString = stringify(aDate)
        const dateStringParts = dateString.match(/(\w+)/g)

        expect(['Fri', 'Sat', 'Sun']).toContain(dateStringParts[0])
        expect(dateStringParts[1]).toBe('Jan')
        expect(['27', '28', '29']).toContain(dateStringParts[2])
        expect(dateStringParts[3]).toBe('2006')
        expect(dateStringParts[5]).toBe('32')
        expect(dateStringParts[6]).toBe('00')

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

    test('for example a BigInt', () => {
        /* TypeError: Do not know how to serialize a BigInt
        const aBigInt = 123n
        */
        const aBigInt = BigInt(123)
        const bigIntString = stringify(aBigInt)

        expect(bigIntString).toBe('123')
    })

    test('for example an Error', () => {
        const anError = new Error('Dead end!')
        const spyErrorToString = jest.spyOn(anError, 'toString')
        const errorString = stringify(anError)

        expect(errorString).toBe('Error: Dead end!')
        expect(spyErrorToString).toHaveBeenCalled()
    })

    test('for example a Function', () => {
        /*
          Not cross-environment consistent,
          test assumes nodeJS 12.18.0
        */
        const aFunction = () => {}
        const spyFunctionToString = jest.spyOn(aFunction, 'toString')
        const functionString = stringify(aFunction)

        expect(functionString).toBe('function aFunction() {}')
        expect(spyFunctionToString).toHaveBeenCalled()
    })
})

describe('stringify uses forceStringify when toString is not available', () => {
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
        const nullString = stringify(nullValue)

        expect(nullString).toBe('null')
        expect(spyJsonStringify).not.toHaveBeenCalled()
    })

    test('for example with a home made object', () => {
        const objectValue = {
            id: 459727,
            name: 'itsName',
            marked: false,
        }
        const spyJsonStringify = jest.spyOn(JSON, 'stringify')
        const objectString = stringify(objectValue)

        expect(objectString).toBe(
            '{"id":459727,"name":"itsName","marked":false}',
        )
        expect(spyJsonStringify).toHaveBeenCalled()
    })

    test('for example with Object.create(null)', () => {
        const createNullValue = Object.create(null)
        const spyJsonStringify = jest.spyOn(JSON, 'stringify')
        const createNullString = stringify(createNullValue)

        expect(createNullString).toBe('{}')
        expect(spyJsonStringify).toHaveBeenCalled()
    })
})

describe('stringify returns empty string when no generic method works', () => {
    test('for example with a cyclic object', () => {
        const cyclicValue = new (function () {
            this.parent = this
            this.parent.child = this

            return this
        })()
        const spyJsonStringify = jest.spyOn(JSON, 'stringify')
        const cyclicString = stringify(cyclicValue)

        expect(cyclicString).toBe('')
        expect(spyJsonStringify).toHaveBeenCalled()
    })
})
