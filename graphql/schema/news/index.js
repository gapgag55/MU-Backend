import {makeExecutableSchema} from 'graphql-tools';
import newsTypes from './news.types';
import newsResolver from './news.resolvers';

const newsSchema = makeExecutableSchema({
  typeDefs: newsTypes,
  resolvers: newsResolver
});

export default newsSchema;