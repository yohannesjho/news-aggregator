const pool = require('./db')
const setInterests = async (interests) => {
    try {
        const result = await pool.query(
            `INSERT INTO user_preferences (user_id, interests) 
             VALUES ($1, $2)
             ON CONFLICT (user_id) 
             DO UPDATE SET interests = $2 
             RETURNING *`,
            [req.user.id, interests]
        );
        return result;
    } catch (error) {
        throw error
    }


}

const setSources = async (sources) => {

    try {
        const result = await pool.query(`INSERT INTO user_preferences(user_id,sources)
            VALUES($1,$2)
            ON CONFLICT (user_id)
            DO UPDATE SET sources = $2 
            RETURNING * `,
            [req.user.id, sources])

        return result
    } catch (error) {
        throw error
    }

}

const setKeywords = async () => {
    try {
        const result = await pool.query(`INSERT INTO user_preferences(user_id,keywords)
        VALUES($1,$2)
        ON CONFLICT (user_id)
        DO UPDATE SET keywords = $2 
        RETURNING * `,
            [req.user.id, keywords])

        return result;
    } catch (error) {
        throw error
    }
}

module.exports = { setInterests, setSources, setKeywords }