const pool = require('./db')

const setBreakingNewsPreference = async (breakingNews) => {
    try {
        const preferedBreakingNews = await pool.query(`INSERT INTO notifications_preferences (user_id, breaking_news)
       VALUES ($1, $2)
       ON CONFLICT (user_id)
       DO UPDATE SET breaking_news = $2, updated_at = CURRENT_TIMESTAMP`
        [req.user.id, breakingNews])
        return preferedBreakingNews;
    } catch (error) {
         throw {status: error?.status || 500,message:error?.message || error};
    }
}

const setDailyDigestPreference = async (req, res) => {

}

module.exports = { setBreakingNewsPreference, setDailyDigestPreference }