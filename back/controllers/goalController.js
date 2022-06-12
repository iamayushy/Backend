const asyncHandler = require('express-async-handler')
//@desc Get Goals
// @routes GET /api/goals
// @access Private

const getGoals = asyncHandler(async(req, res) =>{
   
    res.status(200).json({message: 'Get Goals'})
})


// @routes POST /api/goals
// @access Private
const setGoals = asyncHandler(async(req, res) =>{
    if(!req.body.text){
        res.status(400)
        throw new Error('ADD SOME TEXT')
    }
    else{
    console.log(req.body)
    res.status(200).json({message: 'Set Goals'})}
})

// @routes UPDATE /api/goals/id
// @access Private
const putGoals = asyncHandler(async(req, res) =>{
    res.status(200).json({message: `Update goal ${req.params.id}`})

})

// @routes DELETE /api/goals/id
// @access Private
const deleteGoals = asyncHandler(async(req, res) =>{
    res.status(200).json({message: `Delete goal ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoals,
    putGoals,
    deleteGoals
}
