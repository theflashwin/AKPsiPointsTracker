const express = require('express')
const router = express.Router()

// controllers
const { verifyCode, pushPassword, login, verifyToken } =  require('../controllers/userControllers')

// routes
router.get('/verifycode', verifyCode)
router.get('/pushpassword', pushPassword)
router.get('/login', login)
router.get('/verifytoken', verifyToken)

module.exports = router