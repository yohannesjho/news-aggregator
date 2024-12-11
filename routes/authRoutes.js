const express = require('express')
const { signup, signin, getProfile, updateProfile } = require('../controllers/authControllers')
const authenticateToken = require('../middlewares/authenticate')
const router = express.Router()

router.post('/signup',signup)
router.post('/signin',signin)
router.get('/profile',authenticateToken,getProfile)
router.put('/profile',authenticateToken,updateProfile)

module.exports = router