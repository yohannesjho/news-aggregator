const express = require('express')

const  {shareArticle,saveArticle,commentArticle,getComments} = require('../controllers/socialFeaturesControllers')

const router = express.Router()

router.post('/share',shareArticle)

router.post('/save',saveArticle)

router.post('/comment',commentArticle)

router.get('/comments',getComments)

module.exports = router