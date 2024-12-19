const pool = require('./db')

const shareArticle = async (parameters) => {
    const { articleUrl, sharedWith, } = parameters
    try {
        const result = await pool.query(`INSERT INTO shared_articles(user_id,article_url,shared_with)
             VALUES($1,$2,$3)`,
            [req.user.id, articleUrl, sharedWith])
        
        return result;
    } catch (error) {
        throw error;
    }
}
const saveArticle = () => {

}
const commentArticle = () => {

}

module.exports = { shareArticle, saveArticle, commentArticle }