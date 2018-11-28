// import users from '../../mock/users.json';
import { auth, database } from '../../../libs/firebase';

const userResolver = {
  Query: {
    getUser: async (root, { uid }) => {
      const user = await database.ref(`/users/${uid}`).once('value').then(snapshot => snapshot.val());
      return user;
    }
  },
  Mutation: {
    userRegister: (root, { input }) => {
      const { email, password, fullname } = input;

      /* 1. Create Account */
      return auth.createUser({ email, password })
        .then(user => {
          /* 2. Store account in firebase database */
          const userRef = database.ref(`/users/${user.uid}`)
          userRef.set({
            email,
            password,
            fullname,
            point: 0.00,
            type: 'user',
          });

          return userRef.key;
        })
        .catch(error => {
          console.log("Error creating new user:", error);
        });
    }
  }
};

export default userResolver;