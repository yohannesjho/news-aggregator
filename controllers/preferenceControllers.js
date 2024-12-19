const preferenceServices = require('../services/preferenceServices')
const pool = require('../database/db')
const setInterests = async (req, res) => {
    const { interests } = req.body;

    try {
        const interests = preferenceServices.setInterests(interests)
        res.status(200).send({ status: 'ok', data: "interest updated successfully" });

    } catch (error) {

        res.status(error?.status || 500).send({ data: error?.message || error });
    }
};

const setSources = async (req, res) => {
    const { sources } = req.body
    try {
        const sources = preferenceServices.setSources(sources)

        res.status(201).send({ status: "ok", data: "news sources updated successfully" })

    } catch (error) {
        res.status(error?.status || 500).send({ status: "failed", data:error?.message || error })
    }
}

const setKeywords = async (req, res) => {
    const { keywords } = req.body
    try {
        const result = await pool.query('INSERT INTO user_preferences(user_id,keywords) VALUES($1,$2) ON CONFLICT (user_id) DO UPDATE SET keywords = $2 RETURNING * ', [req.user.id, keywords])
        res.status(201).json({ msg: "keywords created succrssfully", result })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "server error" })
    }
}
module.exports = { setInterests, setSources, setKeywords }