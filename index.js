// Require Express
const express = require('express');
const app = express();

// Express port
const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// Set paths
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// Mongoose
const mongoose = require('mongoose');
const Booking = require('./models/bookings');
const Bookings = require('./models/bookings');
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}

// Routes
app.get('/', (req, res) => {
    res.render('home')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.get('/bookings', async (req, res) => {
    const bookings = await Bookings.find({})
    res.render('bookings', { bookings })
})


