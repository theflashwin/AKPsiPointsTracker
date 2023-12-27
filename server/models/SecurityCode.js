const mongoose = require('mongoose')

const securityCodeScehma = {
    code: {
        type: String,
        required: true,
    },
    userid: {
        type: String,
        required: true,
    }
}

const securityCodeModel = mongoose.model("SecurityCode", securityCodeScehma)

module.exports = securityCodeModel