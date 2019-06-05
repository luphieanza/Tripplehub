'use strict'
const express = require('express')
const body_parser = require('body-parser')
const path = require('path')
const app = express()

app.use(require('morgan')('dev'))
app.use(body_parser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'public/views'))

app.listen(process.env.PORT || 6007, function(){
    console.log("App running")
})

app.use('/api', require('./public/api/completion'))

app.get('/', function(request, respond){
    respond.render('pages/index')
})

app.get('/destination', function(request, respond){
    respond.render('pages/destination-page')
})