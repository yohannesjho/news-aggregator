const pool = require('./db')
const setInterests = async (interests) => {
    const result = await pool.query(
        `INSERT INTO user_preferences (user_id, interests) 
         VALUES ($1, $2)
         ON CONFLICT (user_id) 
         DO UPDATE SET interests = $2 
         RETURNING *`,
        [req.user.id, interests]
    );
    return result;
    
}

const setSources = async () => {

}

const setKeywords = async () => {

}

module.exports = {setInterests, setSources, setKeywords}