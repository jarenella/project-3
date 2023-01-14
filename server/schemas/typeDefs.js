const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type User {
    _id: ID
    name: String
    email: String
    favorites: [NonProfit]
  }
  
  type Order {
    _id: ID
    purchaseDate: String
    nonProfits: [NonProfit]
  }

  type NonProfit {
    nonProfitId: ID
    name: String
    image: String
    description: String
  }

  input NonProfitInput {
    nonProfitId: ID
    name: String
    image: String
    description: String
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    nonProfits(category: ID, name: String): [NonProfit]
    nonProfit(_id: ID!): NonProfit
    user: User
    order(_id: ID!): Order
    
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    addOrder(nonProfits: [ID]!): Order
    updateUser(name: String, email: String, password: String): User
    updateNonProfit(_id: ID!, amount: Float!): NonProfit
    saveNonProfit(nonProfitData: NonProfitInput!): User
    removeNonProfit(nonProfitId: ID!): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;