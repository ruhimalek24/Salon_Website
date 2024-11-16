const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
    name: String,
    gender: String,
    contact: String,
    service: String,
    email: String,
    date: String,
    location: String,
    time: String
    // userId: {
    //     type: String,
    //     required: true
    // }

});

module.exports = mongoose.model('Appointment', AppointmentSchema);