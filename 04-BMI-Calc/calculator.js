const express = require('express')
const body_parser = require('body-parser')
const app = express()

app.use(body_parser.urlencoded({extended:true}))

// First page
app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html')
})

app.post('/', function(req,res){
    res.send('Thanks for posting that')
})

// BMI CALC
app.get('/bmicalculator', function(req,res){
    res.sendFile(__dirname + '/BMI_calculator.html')
})

app.post('/bmicalculator', function(req,res){
    const weight = Number(req.body.weight)
    const height = (Number(req.body.height))
    const result = (weight/Math.pow(height,2)).toFixed(1)
    res.send('Your BMI is' + " " +result)
})
app.listen(3000)