const preference = require('../database/preference')
const setInterests = async (interests) => {
    try {
        const interests = preference.setInterests(interests);
        return interests;
    } catch (error) {
        throw error;
    }
}

const setSources = (sources) => {
    try {
        const sources = preference.setSources(sources)

        return sources;
    } catch (error) {
        throw error
    }
}

const setKeywords = (keyowrds) => {
    try {
        const keyowrds = preference.setKeywords(keyowrds)
        return keywords
    } catch (error) {
        throw error
    }
}

module.exports = { setInterests, setSources, setKeywords }