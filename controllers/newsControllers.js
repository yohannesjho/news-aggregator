const newsServices = require('../services/newsService')

const getAllNews = async (req, res) => {
  console.log(req.query)
 

  
  try {
    const allNews = await newsServices.getAllNews( )
     
    res.status(200).send({ status: "ok", data: allNews })
  } catch (error) {
    res.status(error?.status || 500).send({ status: "faild", message: error?.message || error })
  }




}

const getTopHeadlines = async (req, res) => {
 
  const category = req.params.category
  console.log(req.query)

  const { country, language, sources, keyword } = req.query; // Capture the filters from the query params


  console.log(req.query)

  const parameters = {
    sources,
    keyword,
    category,
    language,
    country
  }


  try {
    const topHeadlines = await newsServices.getTopHeadlines(parameters)

    res.status(200).send({ status: "ok", data: topHeadlines })

  } catch (error) {
    console.log("server error")
    res.status(error?.status || 500).send({ status: "failed", data: error?.message || error })
  }

}


module.exports = { getAllNews, getTopHeadlines }