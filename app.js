const express = require('express')
const app = express()
const path = require('path')
const port = 3000


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set("views", "./views")



const home = require('./routes/home')
app.use('/', home)
// app.use('/login', home)



module.exports = app