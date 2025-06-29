const { readFile, writeFile } = require('fs')
const util = require('util')

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if(err){
//                 reject(err)
//             }
//             else{
//                 resolve(data)
//             }
//         })
//     })
// }

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async() => {
    try {
        const first = await readFilePromise('./content/test.txt', 'utf8')
        const second = await readFilePromise('./content/subfolder/test.txt', 'utf8')
        await writeFilePromise('./content/result-async-clean.txt', `THIS IS AWESOME : ${first} ${second}`)
        console.log(first, second)
    } catch (error) {
        console.log(error)
    }
}

start()