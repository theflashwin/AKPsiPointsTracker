const SecurityCode = require('../models/SecurityCode')
const User = require('../models/User')
const dbConfig = require('../db')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const dotenv = require('dotenv')
dotenv.config()

const rounds = parseInt(process.env.SALT_ROUNDS)
const salt = bcrypt.genSaltSync(rounds)

exports.verifyCode = async (req, res) => {

    try {
        const code = await SecurityCode.findOne({
            code: req.query.code,
            userid: req.query.id,
        })

        console.log(code)

        if (code == null) {
            res.send("notfound")
        } else {
            res.send("found")
        }
    } catch (error) {
        console.log(error)
        res.send("error")
    }

}

exports.pushPassword = async (req, res) => {

    try {

        const pwd = req.query.pwd
        const user = await User.findById(req.query.id)

        console.log(typeof salt)

        const hashedpwd = bcrypt.hashSync(pwd, salt)

        user.password = hashedpwd
        user.save()

        // delete code
        await SecurityCode.deleteMany({
            userid: user.id,
        })
        
        res.send("success")

    } catch (error) {

        console.log(error)
        res.send("error")

    }

}

exports.login = async (req, res) => {

    try {

        const key = req.query.email
        
        const user = await User.findOne({
            email : key,
        })

        if (user == null) {
            res.send("notfound")
            return
        }

        if (bcrypt.compareSync(req.query.password, user.password)) {
            
            const jwt_secret = process.env.JWT_SECRET_KEY
            const data = {
                time: Date(),
                id: user._id,
                isAdmin: user.isAdmin,
            }

            const token = jwt.sign(data, jwt_secret)

            res.send({
                token: token,
                user: user
            })

        } else {
            res.send("wrongpassword")
        }

    } catch (error) {
        console.log("some error")
        res.send("error")
    }

}

exports.verifyToken = async (req, res) => {

    try {

        const jwt_header = process.env.JWT_TOKEN_HEADER
        const jwt_secret = process.env.JWT_SECRET_KEY

        const token = req.header("token")

        if (jwt.verify(token, jwt_secret)) {
            res.send("success")
        } else {
            res.send("wrong")
        }

    } catch (error) {
        console.log(error)
        res.send("error")
    }

}