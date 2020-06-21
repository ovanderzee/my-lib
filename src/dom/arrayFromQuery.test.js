import { arrayFromQuery } from './arrayFromQuery.js'

// query ToArray
test('arrayFromQuery returns a plain array with references to HTMLElements', () => {
    document.body.innerHTML = `
    <section>
      <div id="myId'" class="myClass">div 1</div>
      <div class="myClass">div 2</div>
    </section>
  `
    let input = '.myClass, #myId'
    let output = arrayFromQuery(input)
    expect(output.length).toBe(2)
    expect(output instanceof Array).toBe(true)
    expect(output instanceof NodeList).toBe(false)
    expect(output[0] instanceof HTMLElement).toBe(true)
})
