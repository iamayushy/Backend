const express = require('express')
const router = express.Router()
const {getGoals, singleGoals} = require('../controllers/goalController')
const {addToCart} = require('../controllers/cartController')
// routes
router.route('/').get(getGoals)
router.route('/:id').get(singleGoals)
module.exports = router