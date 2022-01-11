import {
    parseExportedFunctionsAsync,
    renderFunctionDataToMarkdown
} from 'generate-ts-docs'
import fs from 'fs'

const inputGlobs = ['src/**/*.ts']
const outputFile = 'md/API.md'
const heading = '## API\n\n'

async function write(markdown) {
    await fs.writeFile(outputFile, markdown, err => {
        if (err) {
            console.error(err)
        } else {
            console.log('API written successfully')
        }
    })
}

async function generate() {
    const functionsData = await parseExportedFunctionsAsync(inputGlobs)

    let renderMarkdown = heading
    for (const functionData of functionsData) {
        renderMarkdown += renderFunctionDataToMarkdown(functionData, {headerLevel: 3})
    }

    await write(renderMarkdown)
}

generate()
