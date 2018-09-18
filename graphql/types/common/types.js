const { gql } = require('apollo-server-express');

const typeDefs = gql`
  interface EntityBase {
    id: ID!
  }
`;

module.exports = {
  typeDefs,
};

