const { readFile, writeFile, read } = require('fs')

console.log("Start")

readFile('./content/test.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile('./content/subfolder/test.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/result-async.txt', `Here is the result ${first}, ${second}`, {flag: 'a'}, (err, result) => {
            if(err){
                console.log(err)
                return
            }
            console.log("Done with task")
        })
    })
})
console.log("Starting next")

// in async after we start a task, we move on to another task. in sync we wait for that task to finish.