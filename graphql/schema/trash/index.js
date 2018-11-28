import {makeExecutableSchema} from 'graphql-tools';
import trashTypes from './trash.types';
import trashResolver from './trash.resolvers';

const trashSchema = makeExecutableSchema({
  typeDefs: trashTypes,
  resolvers: trashResolver
});

export default trashSchema;