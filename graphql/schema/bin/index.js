import {makeExecutableSchema} from 'graphql-tools';
import binTypes from './bin.types';
import binResolver from './bin.resolvers';

const binSchema = makeExecutableSchema({
  typeDefs: binTypes,
  resolvers: binResolver
});

export default binSchema;