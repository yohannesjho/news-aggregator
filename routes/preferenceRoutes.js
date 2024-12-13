const express = require('express')
const router = express.Router()
const setinterests = require('../controllers/preferenceControllers')
const authenticateToken = require('../middlewares/authenticate')

router.post('/interests',authenticateToken, setinterests)

module.exports = router