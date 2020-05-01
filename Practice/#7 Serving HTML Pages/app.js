const http = require('http')
const fs = require('fs')

let server = http.createServer((req, res) => {
    console.log(`request was made: ${req.url}`)
    res.writeHead(200, { 'Content-Type': "text/html" })

    let myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8')
    myReadStream.pipe(res)
})

server.listen(3000)
console.log('Now listening to port 3000')
