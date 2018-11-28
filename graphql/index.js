import {mergeSchemas} from 'graphql-tools';
import binSchema from './schema/bin';
import userSchema from './schema/user';
import pointSchema from './schema/point';
import newsSchema from './schema/news';
import trashSchema from './schema/trash';

const schema = mergeSchemas({
  schemas: [
    binSchema,
    userSchema,
    pointSchema,
    newsSchema,
    trashSchema
  ],
});

export default schema;