const express = require('express')
const router = express.Router()
const {getAllNews,getTopHeadlines} = require('../controllers/newsControllers')


router.get('/',getAllNews)
router.get('/topheadlines',getTopHeadlines)

module.exports = router