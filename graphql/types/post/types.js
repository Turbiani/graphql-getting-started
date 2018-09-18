const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Post implements EntityBase {
    id: ID!
    title: String!
    description: String
    postedBy: User!
  }
`;  

module.exports = {
  typeDefs,
};

