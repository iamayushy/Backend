const express = require('express')
const cartrouter = express.Router()
const { getCart,
    updateCart,
    deleteCart,
    addToCart } = require('../controllers/cartController')

cartrouter.route('/').get(getCart).post(addToCart)
cartrouter.route('/:id').put(updateCart).delete(deleteCart)

module.exports = cartrouter