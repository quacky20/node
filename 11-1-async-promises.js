const { readFile } = require('fs')

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if(err){
                reject(err)
            }
            else{
                resolve(data)
            }
        })
    })
}

getText('./content/test.txt')
    .then((result) => console.log(result))
    .catch((err) => console.log(err))

// here the promises used helps to make the original code a bit less cluttered, but it still leads to nesting for multiple callbacks