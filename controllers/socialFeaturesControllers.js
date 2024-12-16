const pool  = require('../db/db')

const shareArticle = async (req,res)=>{
    const {articleUrl,sharedWith,} = req.body
    try {
        await pool.query('INSERT INTO shared_articles(user_id,article_url,shared_with) VALUES($1,$2,$3)',[req.user.id,articleUrl,sharedWith])
        res.status(201).send({message:"article shared successfully"})
    } catch (error) {
        res.status(500).send({message:"server error"})
    }
}