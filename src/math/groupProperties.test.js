import { mathSum, mathAvg } from './groupProperties'

const group1 = [55, 267, 169]
const group2 = [0, 0, 0, 0]
const group3 = [55, 0, -55, 0]
const group4 = [134.3457863485, 213.87, -123.46512398, 548.9562]
const group5 = [0, 5.4, NaN, 0]
const group6 = [0, Infinity, -Infinity, 0]
const group7 = [0, Infinity, 3.2, 0]
const group8 = [0, -Infinity, 4.9, 0]
const group9 = [0, Infinity, Infinity, 0]
const groupA = [0, -Infinity, -Infinity, 0]

test('mathSum calculates the sum of an array of number', () => {
    expect(mathSum(group1)).toBe(491)
    expect(mathSum(group2)).toBe(0)
    expect(mathSum(group3)).toBe(0)
    expect(mathSum(group4)).toBe(773.7068623685)
})

test('mathSum returns Infinity rather than NaN', () => {
    expect(mathSum(group5)).toBe(NaN)
    expect(mathSum(group6)).toBe(NaN)
    expect(mathSum(group7)).toBe(Infinity)
    expect(mathSum(group8)).toBe(-Infinity)
    expect(mathSum(group9)).toBe(Infinity)
    expect(mathSum(groupA)).toBe(-Infinity)
})

test('mathAvg calculates the sum of an array of number', () => {
    expect(mathAvg(group1)).toBe(163.66666666666666)
    expect(mathAvg(group2)).toBe(0)
    expect(mathAvg(group3)).toBe(0)
    expect(mathAvg(group4)).toBe(193.426715592125)
})

test('mathAvg returns zero when the sum is NaN', () => {
    expect(mathAvg(group5)).toBe(0)
    expect(mathAvg(group6)).toBe(0)
})

test('mathAvg returns Infinity when the sum is +/- Infinity', () => {
    expect(mathAvg(group7)).toBe(Infinity)
    expect(mathAvg(group8)).toBe(-Infinity)
    expect(mathAvg(group9)).toBe(Infinity)
    expect(mathAvg(groupA)).toBe(-Infinity)
})
