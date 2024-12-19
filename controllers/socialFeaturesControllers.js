const pool = require('../database/db')

const socialFeaturesServices = require('../services/socialFeaturesServices')

const shareArticle = async (req, res) => {
    const { articleUrl, sharedWith, } = req.body

    const parameters = {
        articleUrl,
        sharedWith
    }
    try {
        const share = socialFeaturesServices.shareArticle(parameters)
        
        res.status(201).send({ status: "ok", data:"shared article added successfully" })
    } catch (error) {
        res.status(error?.status || 500).send({ status: "failed",data:error?.message || error })
    }
}

const saveArticle = async (req, res) => {
    const { articleUrl } = req.body
    try {
        const save = socialFeaturesServices.saveArticle(articleUrl)
       
        res.status(201).send({ status: "ok", data:"article saved successfully" })
    } catch (error) {
        res.status(error?.status || 500).send({ status: "faild", data:error?.message || error })
    }
}

const commentArticle = async (req, res) => {
    const { articleUrl, comment } = req.body
    try {
        await pool.query("INSERT INTO comments(user_id,article_url,comment) VALUES($1,$2,$3)", [req.user.id, articleUrl, comment])
        res.status(201).send({ message: "successfully commented on article" })
    } catch (error) {
        res.status(500).send({ message: "server error" })
    }
}

const getComments = async (req, res) => {
    const { articleUrl } = req.body
    try {
        const result = await pool.query('SELECT user_id,comment,commented_at FROM comments WHERE article_url = $1', [articleUrl])
        res.status(200).send(result.rows)
    } catch (error) {
        res.status(500).send({ message: "server error" })
    }
}

module.exports = { shareArticle, saveArticle, commentArticle, getComments }
