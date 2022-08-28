import { gql } from 'apollo-server-micro';

const userTypes = gql`
  type User {
    id: ID
    name: String
    username: String
    comentaries: [Comentary]
    replies: [Reply]
    travels:[Travel]
  }

  type Query {
    getUsers: [User]
    getUser(id: ID!): User
  }
  type Mutation {
    createUser(name: String, username: String): User
    updateUser(id: String, name: String): User
    deleteUser(id: String): User
  }
`;

export { userTypes };
