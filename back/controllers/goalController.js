const asyncHandler = require('express-async-handler')
const Goal = require('../model/goalModel')
//@desc Get Goals
// @routes GET /api/goals
// @access Private

const getGoals = asyncHandler(async(req, res) =>{
    const goals = await Goal.find()
    res.status(200).json(goals)
})

const singleGoals = asyncHandler(async(req, res) => {
    const goal = await Goal.findById(req.params.id)
    res.status(200).json(goal)
})


// @routes POST /api/goals
// @access Private
// const setGoals = asyncHandler(async(req, res) =>{
//     if(!req.body.title && !req.body.image && !req.body.Price && !req.body.count && !req.body.name){
//         res.status(400)
//         throw new Error('ADD SOME TEXT')
//     }
//     else{
//     const goal = await Cart.create({
//         title: req.body.title,
//         name: req.body.name,
//         Price: req.body.Price,
//         count: req.body.count,
//         image: req.body.image
//     })
//     res.status(200).json(goal)}
// })

// @routes UPDATE /api/goals/id
// @access Private
// const putGoals = asyncHandler(async(req, res) =>{
    
//     const goal = await Cart.findById(req.params.id)
//     if(!goal){
//         res.status(400)
//         throw new Error('No Goal Post')
//     }
//     const updatedGoal = await Cart.findByIdAndUpdate(req.params.id, req.body, {new : true})
//     res.status(200).json(updatedGoal)

// })

// @routes DELETE /api/goals/id
// @access Private
// const deleteGoals = asyncHandler(async(req, res) =>{
//     const goal = await Goal.findById(req.params.id)
//     if(!goal){
//         res.status(400)
//         throw new Error('No Data To Delete')
//     }
//     await Goal.findByIdAndDelete(req.params.id)
//     res.status(200).json({message :  `${req.params.id} Deleted`})
// })

module.exports = {
    getGoals,
    singleGoals
    
}
