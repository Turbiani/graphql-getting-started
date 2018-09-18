const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User implements EntityBase {
    id: ID!
    name: String
    email: String
    password: String
  }
`;  

module.exports = {
  typeDefs,
};

