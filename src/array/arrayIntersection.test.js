import { arrayIntersection } from './arrayIntersection.js'

test('arrayIntersection returns intersection of two arrays', () => {
    let array1 = [1, 2, 3, 1, 2, 3]
    let array2 = [2, 2, 3, 3, 4, 4]
    let output = arrayIntersection(array1, array2)
    expect(output).toEqual([2, 3])
})
