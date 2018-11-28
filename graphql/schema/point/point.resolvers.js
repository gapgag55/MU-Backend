import {database} from '../../../libs/firebase';

const pointResolver = {
  Query: {
    getPoints: async () => {
      const points = await database.ref('/point-transaction');
      return points;
    }
  },
  Mutation: {
    receivePoint: (root, {input}) => {
      const {uid, point} = input;
      console.log(input)

      const user = database.ref(`/users/${uid}`);
      user.update({
        point,
      });

      const transaction = database.ref('/points').push();
      transaction.set(input);
    }
  }
};

export default pointResolver;