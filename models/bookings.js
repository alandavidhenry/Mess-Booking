const { time } = require('console');
const mongoose = require('mongoose');
const { type } = require('os');

const bookingsSchema = new mongoose.Schema({
    reason: {
        type: String,
        required: true
    },
    // arrivalDate: {
    //     type: Date,
    //     required: true
    // },
    // arrivalTime: {
    //     type: Date,
    //     required: true
    // },
    // departureDate: {
    //     type: Date,
    //     required: true
    // },
    // departureTime: {
    //     type: Date,
    //     required: true
    // },
    requireBedding: {
        type: Boolean,
        required: true
    }
})

const Bookings = mongoose.model('bookings', bookingsSchema);

module.exports = Bookings;