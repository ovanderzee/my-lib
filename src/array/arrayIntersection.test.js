import { arrayIntersection } from './arrayIntersection'

test('arrayIntersection returns mutual values of two arrays', () => {
    let array1 = [1, 2, 3, 1, 2, 3]
    let array2 = [2, 2, 3, 3, 4, 4]
    let output = arrayIntersection(array1, array2)
    expect(output).toEqual([2, 3])
})

test('arrayIntersection returns absent mutual values of two arrays', () => {
    let array1 = [1, 2, 3, 1, 2, 3]
    let array2 = [5, 6, 6]
    let output = arrayIntersection(array1, array2)
    expect(output).toEqual([])
})

test('arrayIntersection throws when the first array is bad', () => {
    let array1 = null
    let array2 = [5, 6, 6]
    let action = function () {
        arrayIntersection(array1, array2)
    }
    expect(action).toThrow()
})

test('arrayIntersection throws when the second array is bad', () => {
    let array1 = [1, 2, 3, 1, 2, 3]
    let array2 = null
    let action = function () {
        arrayIntersection(array1, array2)
    }
    expect(action).toThrow()
})
