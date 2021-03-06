const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
    title:{
        type: String,
        required: [true, 'Please Add A Text']
    },
    name: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    count: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Goal', goalSchema) 