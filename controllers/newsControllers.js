const newsServices = require('../services/newsService')

const getAllNews = async (req, res) => {
  const { sources, keyword, domains, language, sortBy, page } = req.body

  const parameters = {
    sources, keyword, domains, language, sortBy, page
  }
  try {
    const allNews = newsServices.getAllNews(parameters)
    res.status(200).send({ status: "ok", data: allNews })
  } catch (error) {
    res.status(error?.status || 500).send({ status: "faild", message: error?.message || error })
  }




}

const getTopHeadlines = async (req, res) => {
  const { sources, keyword, category, language, country } = req.body

  const parameters = {
    sources,
    keyword,
    category,
    language,
    country
  }

  try {
    const topHeadlines = newsServices.getTopHeadlines(parameters)
    res.status(200).send({ status: "ok", data: topHeadlines })

  } catch (error) {
    console.log("server error")
    res.status(error?.status || 500).send({ status: "failed", data: error?.message || error })
  }

}


module.exports = { getAllNews, getTopHeadlines }