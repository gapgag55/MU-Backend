// import news from '../../mock/news.json';
import { database } from '../../../libs/firebase';

const trashResolver = {
  Query: {
    getTrash: async () => {
      const trashes = await database.ref(`/trashes/`).once('value').then(snapshot => {
        const output = [];
        for (var key in snapshot.val()) {
          let { latlng, title, description } = snapshot.val()[key];
          output.push({
            latlng,
            title,
            description
          });
        }

        return output;
      });
      return trashes;
    }
  },
  Mutation: {
    addTrash: (root, { input }) => {
      const trash = database.ref('/trashes').push();
      trash.set(input);
      return trash.key;
    }
  }
};

export default trashResolver;