const express = require('express')
const app = express()
const path = require('path')
const port = 3000


app.set('view engine', 'ejs');
app.set("views", "./src/views")
// app.set("views", "./app/src/views")
app.set('views', path.join(__dirname, 'views'));

const home = require('./src/routes/home')

app.use('/', home)





module.exports = app