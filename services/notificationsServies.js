const notification = require('../database/notification')
const setBreakingNewsPreference = async (breakingNews)=>{
    try {
        const preferedBreakingNews = notification.setBreakingNewsPreference(breakingNews)
        return preferedBreakingNews;
        
    } catch (error) {
        throw error;
    }
}

const setDailyDigestPreference = async (dailyDigest)=>{
     try {
        const preferedDailyDigest = notification.setDailyDigestPreference(dailyDigest)
        return preferedBreakingNews;
     } catch (error) {
        throw error;
     }
}

module.exports = {setBreakingNewsPreference,setDailyDigestPreference}