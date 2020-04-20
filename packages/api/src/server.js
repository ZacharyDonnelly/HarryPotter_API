// * .env config Related
require('dotenv').config();
// * GraphQL Related
import { importSchema } from 'graphql-import';
import { ApolloServer } from 'apollo-server';
import { resolvers } from './resolvers';
import depth from 'graphql-depth-limit';
const typeDefs = importSchema('./src/typeDefs/schema.graphql');
// * Database Related
const { sequelize } = require('./models');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  validationRules: depth(5),
  context() {
    //code here
  },
});

sequelize.sync().then(() => {
  server.listen().then(({ url }) => {
    console.log(`Server is ready at ${url}`);
  });
});
