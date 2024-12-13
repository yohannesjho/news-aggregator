const express = require('express')
const router = express.Router()
const { setInterests,setSources,setKeywords} = require('../controllers/preferenceControllers')
const authenticateToken = require('../middlewares/authenticate')

router.post('/interests',authenticateToken, setInterests)
router.post('/sources',authenticateToken, setSources)
router.post('/keywords',authenticateToken,setKeywords)

module.exports = router