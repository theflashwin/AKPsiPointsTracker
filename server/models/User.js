const mongoose = require('mongoose')

const userScehma = {
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    points: {
        type: Number,
        required: true,
    },
    pledgeSemester: {
        type: String,
        required: true,
    },
    standing: {
        type: String,
        required: true,
    },
    deiRequirement: {
        type: Boolean,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
    },
    fines: [],
    pointHistory: [],
    status: {
        type: String,
        required: true,
    }
}

const userModel = mongoose.model("User", userScehma)

module.exports = userModel