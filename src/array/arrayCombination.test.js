import { arrayCombination } from './arrayCombination.js'

test('arrayCombination returns union of two arrays', () => {
    let array1 = [1, 2, 3, 1, 2, 3]
    let array2 = [2, 2, 3, 3, 4, 4]
    let output = arrayCombination(array1, array2)
    expect(output).toEqual([1, 2, 3, 4])
})

test('arrayCombination throws when the first array is bad', () => {
    let array1 = null
    let array2 = [5, 6, 6]
    let action = function () {
        arrayCombination(array1, array2)
    }
    expect(action).toThrow()
})

test('arrayCombination throws when the second array is bad', () => {
    let array1 = [1, 2, 3, 1, 2, 3]
    let array2 = null
    let action = function () {
        arrayCombination(array1, array2)
    }
    expect(action).toThrow()
})
