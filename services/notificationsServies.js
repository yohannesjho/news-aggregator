const notification = require('../database/notification')
const setBreakingNewsPreference = async (breakingNews)=>{
    try {
        const preferedBreakingNews = notification.setBreakingNewsPreference(breakingNews)
        return preferedBreakingNews;
        
    } catch (error) {
        throw error;
    }
}

const setDailyDigestPreference = async (req,res)=>{

}

module.exports = {setBreakingNewsPreference,setDailyDigestPreference}