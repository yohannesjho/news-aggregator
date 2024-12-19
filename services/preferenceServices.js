const preference = require('../database/preference')
const setInterests = async (interests) => {
    try {
        const interests = preference.setInterests(interests);
        return interests;
    } catch (error) {
        throw error;
    }
}

const setSources = () => {
 try {
    
 } catch (error) {
    
 }
}

const setKeywords = () => {

}

module.exports = { setInterests, setSources, setKeywords }