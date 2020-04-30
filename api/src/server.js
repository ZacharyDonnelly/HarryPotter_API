// * GraphQL Related
import { ApolloServer } from 'apollo-server';
import resolvers from './resolvers';
import depth from 'graphql-depth-limit';
import typeDefs from './typeDefs';
// * Database Related
const { sequelize, House, Character } = require('./models');
// * .env config Related
require('dotenv').config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  validationRules: depth(5),
  context() {
    return { House, Character };
  },
});

export default async () => {
  try {
    await sequelize.sync().then(() => {
      server.listen().then(({ url }) => {
        console.log(`Server is ready at ${url}`);
      });
    });
  } catch (err) {
    console.error('OOPS! Something went wrong!', err);
  }
};
