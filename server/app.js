const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const dotenv = require('dotenv')
dotenv.config()

const app = express()

// api endpoint servicing
app.use(morgan('dev'))
app.use(cors())

// db congif
const db = require("./db")

// routers
const userRouter = require('./routers/userRouter')
const adminRouter = require('./routers/adminRouter')
app.use("/users", userRouter)
app.use("/admin", adminRouter)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})