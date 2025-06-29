const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Home page')
        return
    }
    if(req.url === '/about'){
        for(let i = 0; i < 1000 ; i++){
            for(let j = 0; j < 1000 ; j++){
                console.log(`${i} and ${j}`)
            }
        }
        res.end("About page")
        return
    }
    res.end('Error page')
})

server.listen(5000, () => {
    console.log("Server is listening on port 5000...")
})

// if the about page is loaded, no other user can load a page unless the about page finishes loading.