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

const commentArticle = () => {

} 

module.exports = { shareArticle, saveArticle, commentArticle}