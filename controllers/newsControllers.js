const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.NEWS_API);

const getAllNews = async (req, res) => {
  newsapi.v2.everything({
    q: 'technology',
    sources: 'bbc-news,the-verge',
    domains: 'bbc.co.uk, techcrunch.com',
    language: 'en',
    sortBy: 'relevancy',
    page: 2
  }).then(response => {
    res.send(response)
    console.log(response);
    /*
      {
        status: "ok",
        articles: [...]
      }
    */
  });

   
}

const getTopHeadlines = async (req,res)=>{
  newsapi.v2.topHeadlines({
    q: 'bitcoin',
    category: 'business',
    language: 'en',
    country: 'us'
  }).then(response => {
    res.send(response)
    console.log(response);
    /*
      {
        status: "ok",
        articles: [...]
      }
    */
  });
}

module.exports = {getAllNews,getTopHeadlines}