const notificationSercices = require('../services/notificationsServies')

const setBreakingNewsPreference = async (req,res)=>{
const { breakingNews } = req.body
try {
    const preferedBreakingNews = notificationSercices.setBreakingNewsPreference(breakingNews)
    res.status(201).send({status:"success",data:"preference setted successfully"})
} catch (error) {
    res.status(error?.status || 500).send({status:'failed',error:error?error.message:error})
}
}

const setDailyDigestPreference = async (req,res)=>{

}

module.exports = { setBreakingNewsPreference, setDailyDigestPreference }