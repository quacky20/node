const { readFile, writeFile } = require('fs').promises
const util = require('util')


// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async() => {
    try {
        const first = await readFile('./content/test.txt', 'utf8')
        const second = await readFile('./content/subfolder/test.txt', 'utf8')
        await writeFile('./content/result-async-cleaner.txt', `THIS IS AWESOME : ${first} ${second}`)
        console.log(first, second)
    } catch (error) {
        console.log(error)
    }
}

start()