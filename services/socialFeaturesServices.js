const socialFeature = require('../database/socialFeatures')

const shareArticle = (parameters) => {
  try {
    const share = socialFeature.shareArticle(parameters)
    return share;
  } catch (error) {
    throw error;
  }
}

const saveArticle = () => {

}

const commentArticle = () => {

} 

module.exports = { shareArticle, saveArticle, commentArticle}