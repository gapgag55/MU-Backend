// import news from '../../mock/news.json';
import {database} from '../../../libs/firebase';

const newsResolver = {
  Query: {
    getNews: async () => {
      const news = await database.ref(`/news`).once('value').then(snapshot => {
        return snapshot.val()
      });
      return news;
    }
  },
  Mutation: {
    createNew: (root, {input}) => {
      const news = database.ref('/news').push();
      news.set({
        ...input,
      })
    }
  }
};

export default newsResolver;