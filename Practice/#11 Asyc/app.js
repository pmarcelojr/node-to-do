const fs = require('fs')

fs.mkdir('stuff', function(){
    fs.readFile('readMe.txt', 'utf8', function(err, data){
        fs.writeFileSync('./stuff/writeMe.txt', data)
    })
})