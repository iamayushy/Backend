const express = require('express')
const colors = require('colors')
const connectDB = require('./config/db')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleWare')
const port = process.env.PORT || 5000
const cors = require('cors')
connectDB()
const app = express()
app.use(cors({
    origin: '*'
}))

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/product', require('./routes/goalRoutes'))
app.use('/cart', require('./routes/cartRoutes'))
app.use(errorHandler)


app.listen(port, () =>{
    console.log(`Server started on ${port}`)
})