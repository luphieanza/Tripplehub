const express = require('express')
const body_parser = require('body-parser')
const app = express()

app.use(body_parser.urlencoded({extended: false}))
app.set('view engine', 'ejs')

app.listen(process.env.PORT || 6007, function(){
    console.log("App running")
})

app.use('/api', require('./public/api/completion'))