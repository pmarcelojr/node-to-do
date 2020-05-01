const express = require('express')

const app = express()

app.set('view engine', 'ejs')

app.get('/', function(req, res){
    res.writeHead(200, { 'Content-Type': 'text/html'})
    res.sendFile(__dirname + '/index.html')
})
app.get('/contact', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.sendFile(__dirname + '/contact.html')
})

app.get('/profile/:name', (req, res) => {
    let data = {age: 26, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']}
    res.render('profile', {person: req.params.name, data: data})
})

app.listen(3000)