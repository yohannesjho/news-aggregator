const express = require('express')

const router = express.Router()

router.post('/share',shareArticle)

router.post('/save',saveArticle)