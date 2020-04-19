// * GraphQL Related
const { importSchema } = require('graphql-import');
const { ApolloServer } = require('apollo-server');
const resolvers = require('./resolvers');
const typeDefs = importSchema('./schema/schema.graphql');
const depth = require('graphql-depth-limit');
// * .env config Related
require('dotenv').config();
// * Database Related
const mongoose = require('mongoose');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  validationRules: depth(4),
  context() {
    //code here
  },
});

server.listen().then(({ url }) => {
  console.log(`Server is ready at ${url}`);
});
