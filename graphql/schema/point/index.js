import {makeExecutableSchema} from 'graphql-tools';
import pointTypes from './point.types';
import pointResolver from './point.resolvers';

const pointSchema = makeExecutableSchema({
  typeDefs: pointTypes,
  resolvers: pointResolver
});

export default pointSchema;