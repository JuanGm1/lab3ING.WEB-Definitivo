import { gql } from 'apollo-server-micro';

const userTypes = gql`
  enum Enum_Roles {
    tripLeader
    guest
  }

  type User {
    id: ID
    name: String
    rol: Enum_Roles
    comentaries: [Comentary]
    replies: [Reply]
    travels: [Travel]
    likes: [Like]
  }

  type Query {
    getUsers: [User]
    getUser(id: ID!): User
  }
  type Mutation {
    createUser(name: String, rol: Enum_Roles): User
    updateUser(id: String, name: String, rol: Enum_Roles): User
    deleteUser(id: String): User
  }
`;

export { userTypes };
