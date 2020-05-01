const express = require('express')

const app = express()

app.get('/', function(req, res){
    res.send('this is the homepage')
})
app.get('/contact', (req, res) => {
    res.send('this is the contact homepage')
})

app.get('/profile/:name', (req, res) => {
    res.send(`You requested to see a profile with the name of ${req.params.name}`)
})

app.listen(3000)