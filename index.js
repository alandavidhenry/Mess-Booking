const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('home')
  })

app.get('/login', (req, res) => {
    res.render('login')
  })

app.get('/register', (req, res) => {
    res.render('register')
  })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })