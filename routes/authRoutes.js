const express = require('express')
const { signup, signin, getProfile } = require('../controllers/authControllers')
const authenticateToken = require('../middlewares/authenticate')
const router = express.Router()

router.post('/signup',signup)
router.post('/signin',signin)
router.get('/profile',authenticateToken,getProfile)

module.exports = router