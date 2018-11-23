import {makeExecutableSchema} from 'graphql-tools';
import userTypes from './user.types';
import userResolver from './user.resolvers';

const userSchema = makeExecutableSchema({
  typeDefs: userTypes,
  resolvers: userResolver
});

export default userSchema;