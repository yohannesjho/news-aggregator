const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.NEWS_API);


const getAllNews = async (parameters) => {
    
    try {
        const allNews = await newsapi.v2.everything({
            q: "all",
            
        })
        return allNews
    } catch (error) {
        throw error

    }
}

const getTopHeadlines = async (parameters) => {
    console.log(parameters)
    const { sources, keyword, category, language, country } = parameters
    try {
        const topHeadlines = await newsapi.v2.topHeadlines({

            sources: (category || country) ? " " : sources,

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