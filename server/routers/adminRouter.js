const express = require('express')
const router = express.Router()

// controllers
const { login, newuser } = require('../controllers/adminControllers')

// routes
router.get("/login", login)
router.get("/newuser", newuser)

module.exports = router