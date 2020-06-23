import { hasOwnProperty } from './hasOwnProperty.js'

const TestOrigin = function () {
    this.origin = 'origin'
}

TestOrigin.prototype.proto = 'proto'

const testObject = new TestOrigin()
testObject.new = 'new'

test('hasOwnProperty returns true when the property is available', () => {
    expect(hasOwnProperty(testObject, 'new')).toBe(true)
    expect(hasOwnProperty(testObject, 'origin')).toBe(true)
})

test('hasOwnProperty returns false when the property is in the prototype chain', () => {
    expect(hasOwnProperty(testObject, 'proto')).toBe(false)
})
