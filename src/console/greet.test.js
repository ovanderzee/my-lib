import { greet } from './greet'

test('greet logs to the console', () => {
    const spyConsoleLog = jest.spyOn(console, 'log')
    greet()

    expect(spyConsoleLog).toHaveBeenCalledWith('Hello World!')
})
