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

        res.status(201).send({ status: "ok", data: "shared article added successfully" })
    } catch (error) {
        res.status(error?.status || 500).send({ status: "failed", data: error?.message || error })
    }
}

const saveArticle = async (req, res) => {
    const { articleUrl } = req.body
    try {
        const save = socialFeaturesServices.saveArticle(articleUrl)

        res.status(201).send({ status: "ok", data: "article saved successfully" })
    } catch (error) {
        res.status(error?.status || 500).send({ status: "faild", data: error?.message || error })
    }
}

const commentArticle = async (req, res) => {
    const { articleUrl, comment } = req.body

    const parameters = {
        articleUrl,
        comment
    }
    try {
        const comment = socialFeaturesServices.commentArticle(parameters)

        res.status(201).send({ status: "ok", data: "successfully commented on article" })
    } catch (error) {
        res.status(error?.status || 500).send({ status: "failed", data: error?.message || error })
    }
}

const getComments = async (req, res) => {
    const { articleUrl } = req.body
    try {
        const comments = socialFeaturesServices.getComments(articleUrl)

        res.status(200).send({ status: "ok", data: comments })
    } catch (error) {
        res.status(error?.status || 500).send({ status: "failed", data: errro?.message || error })
    }
}

module.exports = { shareArticle, saveArticle, commentArticle, getComments }
