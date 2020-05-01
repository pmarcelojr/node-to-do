const http = require('http')
const fs = require('fs')

let server = http.createServer((req, res) =>{
    console.log(`request was made: ${req.url}`)
    res.writeHead(200, {'Content-Type': 'application/json'})

    let myObj = {
        name: 'Marcelo',
        job: 'Ninja',
        age: 26
    }

    res.end(JSON.stringify(myObj))
})

server.listen(3000)
console.log('Now listening to port 3000')