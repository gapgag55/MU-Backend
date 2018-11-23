import users from '../../mock/users.json';

const userResolver = {
  Query: {
    getUser: (root, {id}) => users.find(user => user.id == id)
  }
};

export default userResolver;