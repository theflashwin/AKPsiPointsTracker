const User = require('../models/User')
const SecurityCode = require('../models/SecurityCode')
const dbConfig = require('../db')
const Chance = require('chance')

const chance = Chance()

exports.login = async (req, res) => {

    if (req.query.username === "root123" && req.query.password === "root123") {
        res.send("success")
    } else {
        res.send("error")
    }
    
}

exports.newuser = async (req, res) => {

    try {
        const user = new User({
            firstname: req.query.firstname,
            lastname: req.query.lastname,
            password: "NULL",
            points: req.query.points,
            pledgeSemester: req.query.pledgeSemester,
            email: req.query.email,
            standing: req.query.standing,
            status: req.query.status,
            deiRequirement: false,
            isAdmin: false,
            fines: [],
            pointHistory: [{
                name: "Initialization",
                type: "Other",
                points: req.query.points,
                comments: "",
            }]
        })
    
        // put user in database
        await user.save()
    
        // generate random security code
        const code = chance.guid()
    
        const securityCode = new SecurityCode({
            code: code,
            userid: user._id,
        })
    
        await securityCode.save()
    
        res.send(securityCode)
    } catch (error) {
        console.log(error)
        res.send("error")
    }

}   