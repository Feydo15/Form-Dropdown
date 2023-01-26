const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const colorSchema = new Schema({
    color: {
        type: String,
        require: true
    }
},{});

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
const Color = mongoose.model("Color", colorSchema);

module.exports = {Car, Color};