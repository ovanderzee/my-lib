import { arrayFromCommaSeparatedList } from './arrayFromCommaSeparatedList.js'

// commaSeperatedListToArray
test('arrayFromCommaSeparatedList applies normalisation', () => {
    let input = '  .myClass  ,  #myId   myElement '
    let output = JSON.stringify(arrayFromCommaSeparatedList(input))
    expect(output).toBe('[".myClass","#myId myElement"]')
})

test('arrayFromCommaSeparatedList applies sanitation', () => {
    let input = ', .myClass, #myId, '
    let output = JSON.stringify(arrayFromCommaSeparatedList(input))
    expect(output).toBe('[".myClass","#myId"]')
})
