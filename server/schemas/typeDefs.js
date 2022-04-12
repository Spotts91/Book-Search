const { gql } = require('apollo-server-express');

// Check me Query later || [String]
const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        savedBooks: [Book]
        bookCount: Int
    }

    type Query {
        me: User
    }

    type Book {
        authors: [String]
        title: String!
        description: String
        bookId: String!
        image: String
        link: String
    }

    input bookId {
        authors: [String]
        title: String!
        description: String
        bookId: String!
        image: String
        link: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(savedBook: ID!): User
        removeBook(bookId: ID): User
    }
`;

module.exports = typeDefs;