require('dotenv').config()


const express = require("express")
const path = require('path')
const ejsMate = require('ejs-mate')
const AppError = require('./views/AppError')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const bcrypt = require('bcrypt')


const app = express();

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'cool-stuff')))


app.get('/', (req, res) => {
    res.render('home')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/music', (req, res) => {
    res.render('music')
})

app.get('/color-flipper', (req, res) => {
    res.render('color-flipper')
})

app.get('/search-the-web', (req, res) => {
    res.render('search')
})

app.get('/countdown', (req, res) => {
    res.render('counter')
})

app.get('/target-practice', (req, res) => {
    res.render('target')
})

app.get('/calculator', (req, res) => {
    res.render('calculator')
})


app.get('/pop-up', (req, res) => {
    res.render('pop-up')
})

app.get('/loading', (req, res) => {
    res.render('loading')
})

app.use((req, res) => {
    res.send('404')
})

const UNIX_timestamp = 1654258922

function timeConverter(UNIX_timestamp){
    var a = new Date(1654258922 * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }
  console.log(timeConverter(0));

app.use((err, req, res) => {
    res.send('404')
})

app.use((err, req, res) => {
    const { status = 500, message = 'something went wrong' } = err
    res.status(status)
    res.send('404')
})

app.get('*', (req, res) => {
    res.send(`route not found`)
})

const PORT = 4000

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`)
})