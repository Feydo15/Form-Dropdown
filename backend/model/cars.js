const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const carSchema = new Schema({
    car: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true 
    },
    extras: {
        type: [String],
        required: true
    }
},{});
const Car = mongoose.model('Car', carSchema);

module.exports = Car;