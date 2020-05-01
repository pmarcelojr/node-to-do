const http = require('http')
const fs = require('fs')

let server = http.createServer((req, res)=>{
    console.log(`request was made: ${req.url}`)
    res.writeHead(200, {'Content-Type': 'text/plain'})
    let myReadStream = fs.createReadStream(__dirname + '/readMe.txt')
    myReadStream.pipe(res)
})

server.listen(3000)
console.log('Now listing to port 3000')