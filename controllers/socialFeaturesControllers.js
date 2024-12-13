const pool  = require('../database/db')

const shareArticle = async (req,res)=>{
    const {articleUrl,sharedWith,} = req.body
    try {
        await pool.query('INSERT INTO shared_articles(user_id,article_url,shared_with) VALUES($1,$2,$3)',[req.user.id,articleUrl,sharedWith])
        res.status(201).send({message:"article shared successfully"})
    } catch (error) {
        res.status(500).send({message:"server error"})
    }
}

const saveArticle = async (req,res) => {
    const {articleUrl} = req.body
    try {
        await pool.query("INSERT INTO saved_article(user_id,article_url) VALUES($1,$2)",[req.user.id,articleUrl])
        res.status(201).send({message:"article saved successfully"})
    } catch (error) {
        res.status(500).send({message:"server error"})
    }
}

const commentArticle = async (req,res) => {
    const {articleUrl,comment} = req.body
    try {
        await pool.query("INSERT INTO comments(user_id,article_url,comment) VALUES($1,$2,$3)",[req.user.id,articleUrl,comment])
        res.status(201).send({message:"successfully commented on article"})
    } catch (error) {
        res.status(500).send({message:"server error"})
    }
}

const getComments = async (req,res) =>{
    const {articleUrl} = req.body
    try {
        const result = await pool.query('SELECT user_id,comment,commented_at FROM comments WHERE article_url = $1',[articleUrl])
        res.status(200).send(result.rows)
    } catch (error) {
        res.status(500).send({message:"server error"})
    }
}

module.exports = {shareArticle,saveArticle,commentArticle,getComments}
