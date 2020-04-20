// * .env config Related
require('dotenv').config();
// * GraphQL Related
const { importSchema } = require('graphql-import');
const { ApolloServer } = require('apollo-server');
const resolvers = require('./src/resolvers');
const typeDefs = importSchema('./src/typeDefs/schema.graphql');
const depth = require('graphql-depth-limit');
// * Database Related
const mongoose = require('mongoose');

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

server.listen().then(({ url }) => {
  console.log(`Server is ready at ${url}`);
});
