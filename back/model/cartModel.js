const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
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
    },
   no:{
    type:Number,
    required: true
   }
}, {
    timestamps: true
})

module.exports = mongoose.model('Cart', cartSchema) 