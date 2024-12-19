const socialFeature = require('../database/socialFeatures')

const shareArticle = (parameters) => {
    try {
        const share = socialFeature.shareArticle(parameters)
        return share;
    } catch (error) {
        throw error;
    }
}

const saveArticle = (articleUrl) => {
    try {
        const save = socialFeature.saveArticle(articleUrl)
    } catch (error) {

    }
}

const commentArticle = (parameters) => {
    const { articleUrl, comment } = parameters
    try {
        const comment = socialFeature.commentArticle(parameters)

        return comment;
    } catch (error) {
        throw error;
    }
}

const getComments = (articleUrl) => {
    try {
        const comments = socialFeature.getComments(articleUrl)

        return comments;
    } catch (error) {
        return error;
    }
}

module.exports = { shareArticle, saveArticle, commentArticle, getComments }