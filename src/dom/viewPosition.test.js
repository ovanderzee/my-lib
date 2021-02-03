import { viewPosition } from './viewPosition'

describe('viewPosition', () => {
    let bodyHTML
    let mouseEvent = { stopPropagation: function () {} }

    beforeEach(() => {
        bodyHTML = `
            <style type="text/html">
                // random values
                #info {
                    left: 171px;
                    right: 55px;
                    top: 212px;
                    bottom: 675px;
                }
            </style>
            <div id="info">Information</div>
        `
        mouseEvent = { stopPropagation: function () {} }
    })

    describe('setup functions', () => {
        beforeEach(() => {
            document.body.innerHTML = bodyHTML
            const info = document.querySelector('#info')
        })

        test('viewPosition returns concept functions', () => {
            const vp = viewPosition(info, 16)

            Object.values(vp).forEach((v) => {
                expect(typeof v).toBe('function')
            })
        })
    })

    describe('pointer functions', () => {
        window.innerWidth = 1200
        window.innerHeight = 900

        beforeAll(() => {
            window.dispatchEvent(new Event('resize'))
            // the html element, has same size and position as the viewport (the body is the scrolling part).
            const docElem = document.documentElement
            Object.defineProperty(docElem, 'clientWidth', {
                writable: true,
                configurable: true,
                value: window.innerWidth,
            })
            Object.defineProperty(docElem, 'clientHeight', {
                writable: true,
                configurable: true,
                value: window.innerHeight,
            })
        })

        beforeEach(() => {
            document.body.innerHTML = bodyHTML
            const info = document.querySelector('#info')
        })

        test('from left top', () => {
            const vp = viewPosition(info, 16)
            mouseEvent.clientX = 25
            mouseEvent.clientY = 25
            vp.pointer(mouseEvent)

            expect(info.style.left).toBe('41px')
            expect(info.style.right).toBe('')
            expect(info.style.top).toBe('41px')
            expect(info.style.bottom).toBe('')
        })

        test('from left bottom', () => {
            const vp = viewPosition(info, 16)
            mouseEvent.clientX = 25
            mouseEvent.clientY = window.innerHeight - 25
            vp.pointer(mouseEvent)

            expect(info.style.left).toBe('41px')
            expect(info.style.right).toBe('')
            expect(info.style.top).toBe('')
            expect(info.style.bottom).toBe('41px')
        })

        test('from right top', () => {
            const vp = viewPosition(info, 16)
            mouseEvent.clientX = window.innerWidth - 25
            mouseEvent.clientY = 25
            vp.pointer(mouseEvent)

            expect(info.style.left).toBe('')
            expect(info.style.right).toBe('41px')
            expect(info.style.top).toBe('41px')
            expect(info.style.bottom).toBe('')
        })

        test('from right bottom', () => {
            const vp = viewPosition(info, 16)
            mouseEvent.clientX = window.innerWidth - 25
            mouseEvent.clientY = window.innerHeight - 25
            vp.pointer(mouseEvent)

            expect(info.style.left).toBe('')
            expect(info.style.right).toBe('41px')
            expect(info.style.top).toBe('')
            expect(info.style.bottom).toBe('41px')
        })
    })
})
