const { readFileSync, writeFileSync } = require('fs')
// const fs = require('fs')

// fs.readFileSync
// fs.writeFileSync
console.log("Start")
const first = readFileSync('./content/test.txt', 'utf8')
const second = readFileSync('./content/subfolder/test.txt', 'utf8')

console.log(first)
console.log(second)

writeFileSync('./content/result-sync.txt', `Here is the result ${first}, ${second}`, {flag: 'a'})

// 'a' flag appends at the end of the file

const result = readFileSync('./content/result-sync.txt', 'utf8')
console.log(result)

console.log("Done")
console.log("Starting next one")