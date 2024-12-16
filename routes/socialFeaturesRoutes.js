const express = require('express')

const router = express.Router()

router.post('/share',shareArticle)

router.post('/save',saveArticle)

router.post('/comment',commentArticle)

router.get('/comments',getComments)