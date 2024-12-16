const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.NEWS_API);

const getAllNews = async (req, res) => {
  const { sources, keyword, domains, language, sortBy, page } = req.body
  try {
    newsapi.v2.everything({
      q: keyword,
      sources: sources,
      domains: domains,
      language: language,
      sortBy: sortBy,
      page: page
    }).then(response => {
      res.status(200).send(response)
    });
  } catch (error) {
    console.log("server error")
    res.status(500).send("server error")
  }

}

const getTopHeadlines = async (req, res) => {
  const { sources, keyword, category, language, country } = req.body

  console.log(req.body)

  try {
    newsapi.v2.topHeadlines({

      sources: category || country ? " " : sources,

      q: keyword,

      category: category,

      language: language,

      country: country
    }).then(response => {

      console.log(response);

      res.status(200).send(response)

    });
  } catch (error) {
    console.log("server error")
    res.status(500).send("server error")
  }

}


module.exports = { getAllNews, getTopHeadlines }