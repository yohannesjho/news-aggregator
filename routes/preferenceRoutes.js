const express = require('express')
const router = express.Router()
const { setInterests,setSources} = require('../controllers/preferenceControllers')
const authenticateToken = require('../middlewares/authenticate')

router.post('/interests',authenticateToken, setInterests)
router.post('/sources',authenticateToken, setSources)

module.exports = router