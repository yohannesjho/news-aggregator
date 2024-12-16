const express = require('express')
const router = express.Router()
const {getAllNews,getTopHeadlines,getNewsById} = require('../controllers/newsControllers')


router.get('/',getAllNews)
router.post('/topheadlines',getTopHeadlines)
 

module.exports = router