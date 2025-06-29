const { readFile} = require('fs')

console.log("Started first task")

readFile('./content/test.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
    console.log("Finished first task")
}) // this task is offloaded
console.log("Starting next")