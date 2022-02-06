const mongoose = require('mongoose');
const Bookings = require('./models/bookings');
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}

const b = new Bookings({
    reason: 'Trooping the Colour',
    requireBedding: true
})
b.save()
    .then(b => {
        console.log(b)
    })
    .catch(e => {
        console.log(e)
    })