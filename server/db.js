const mongoose = require('mongoose')

const dotenv = require('dotenv')
dotenv.config()

var mongoURL = process.env.MONGO_URL;

mongoose.connect(mongoURL); 

var connection = mongoose.connection;

connection.on('error', () => {
    console.log('MongoDB Connection Failure')
})

connection.on('connected', () => {
    console.log('MongoDB Connection Success')
})

module.exports = mongoose;