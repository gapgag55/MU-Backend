import news from '../../mock/news.json';

const newsResolver = {
  Query: {
    getNews: () => news
  }
};

export default newsResolver;