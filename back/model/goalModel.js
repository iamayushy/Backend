const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
    text:{
        type: String,
        required: [true, 'Please Add A Text']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Goal', goalSchema) 