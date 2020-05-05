const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const urlencondedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs')
app.use('/assets', express.static('stuff'))

app.get('/', function(req, res){
    res.render('index')
})
app.get('/contact', (req, res) => {
    res.render('contact', {qs: req.query})
})
app.post('/contact', urlencondedParser, function (req, res) {
    console.log(req.body)
    res.render('contact-sucess', { data: req.body })
})

app.get('/profile/:name', (req, res) => {
    let data = {age: 26, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']}
    res.render('profile', {person: req.params.name, data: data})
})

app.listen(3000)