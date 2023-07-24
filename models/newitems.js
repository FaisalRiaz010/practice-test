const mongoose = require('mongoose');

//create a schema item in db

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    tag:{
        type:Number,
        required:true
    }
});

const newItems = mongoose.model('newItems', itemSchema);

module.exports = newItems;
