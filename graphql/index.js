import {mergeSchemas} from 'graphql-tools';
import binSchema from './schema/bin';
import userSchema from './schema/user';
// import newsSchema from './schema/news';

const schema = mergeSchemas({
  schemas: [
    binSchema,
    userSchema,
    // newsSchema
  ],
});

export default schema;