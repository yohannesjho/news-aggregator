const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.NEWS_API);


const getAllNews = async (parameters) => {
    const { sources, keyword, domains, language, sortBy, page } = parameters;
    try {
        const allNews = await newsapi.v2.everything({
            q: keyword,
            sources: sources,
            domains: domains,
            language: language,
            sortBy: sortBy,
            page: page
        })
        return allNews
    } catch (error) {
        throw error

    }
}

const getTopHeadlines = async (parameters) => {
    const { sources, keyword, category, language, country } = parameters
    try {
        const topHeadlines = await newsapi.v2.topHeadlines({

            sources: category || country ? " " : sources,

            q: keyword,

            category: category,

            language: language,

            country: country
        })

        return topHeadlines;
    } catch (error) {
        throw error
    }
}

module.exports = { getAllNews, getTopHeadlines }