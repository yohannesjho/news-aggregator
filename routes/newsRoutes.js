const express = require('express')
const router = express.Router()
const {getAllNews,getTopHeadlines,getNewsById} = require('../controllers/newsControllers')


router.get('/',getAllNews)
router.get('/topheadlines/:category',getTopHeadlines)
router.get('/topheadlines',getTopHeadlines)
 

module.exports = router