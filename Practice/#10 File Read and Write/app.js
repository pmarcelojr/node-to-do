const fs = require('fs')

// Read
fs.readFile('sample.txt', 'utf8', function(err, data){
    console.log(data)
    fs.writeFileSync('writeMe.txt', data)
})