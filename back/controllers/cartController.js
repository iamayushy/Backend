const asyncHandler = require('express-async-handler')
const Cart = require('../model/cartModel')

const getCart = asyncHandler(async (req, res) => {
    const product = await Cart.find()
    res.status(200).json(product)
})

const addToCart = asyncHandler(async (req, res) => {
    if (!req.body.no &&!req.body.title && !req.body.image && !req.body.Price && !req.body.count && !req.body.name) {
        res.status(400)
        throw new Error('Server Error')
    }
    else {
        const goal = await Cart.create({
            title: req.body.title,
            name: req.body.name,
            Price: req.body.Price,
            count: req.body.count,
            image: req.body.image,
            no: req.body.no
        })
        res.status(200).json({ message: 'ADD To CART' })
    }
})

const updateCart = asyncHandler(async (req, res) => {
    const cartUpdate = await Cart.findById(req.params.id)
    if(!cartUpdate){
        res.status(400)
        throw new Error('Data Not Found')
    }
    const cartUpdateData = await Cart.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(cartUpdateData)
})

const deleteCart = asyncHandler(async (req, res) => {
    const emptyCart = await Cart.findById(req.params.id)
    if(!emptyCart){
        res.status(400)
        throw new Error('Cart Is Empty')
    }
    await Cart.findByIdAndDelete(req.params.id)

    res.status(200).json({ message: `Deleted ${req.params.id}` })
})


module.exports = {
    getCart,
    addToCart,
    updateCart,
    deleteCart
}




