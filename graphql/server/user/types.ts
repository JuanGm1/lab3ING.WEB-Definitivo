import { gql } from 'apollo-server-micro';

const userTypes = gql`
type User {
    id: String       
    name:  String
    username: String
  }
type Mutation {
    updateUser(id: String,name:String): User
  }
`;

export { userTypes };
