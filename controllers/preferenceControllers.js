const pool = require('../db/db')
const setInterests = async (req, res) => {
    const {interests } = req.body;
    console.log(interests)  

    try {
        const result = await pool.query(
            `INSERT INTO user_preferences (user_id, interests) 
             VALUES ($1, $2)
             ON CONFLICT (user_id) 
             DO UPDATE SET interests = $2 
             RETURNING *`,
            [req.user.id, interests]
        );
        res.status(200).json({ message: 'Interests updated successfully', data: result.rows[0] });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Server error' });
    }
};

const setSources = async (req,res) =>{
    const {sources} = req.body
    console.log(sources)
    try {
        const result = await pool.query('INSERT INTO user_preferences(user_id,sources) VALUES($1,$2) ON CONFLICT (user_id) DO UPDATE SET sources = $2 RETURNING * ',[req.user.id,sources])
        console.log(result.rows)
        res.status(201).json({msg:"sources added successfully",result})
    } catch (error) {
        res.status(500).json({msg:"internal error"})
    }
}
module.exports = {setInterests,setSources}