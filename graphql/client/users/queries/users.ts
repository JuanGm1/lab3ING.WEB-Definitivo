import { gql } from 'apollo-server-micro';

const GET_USERS = gql`
  query GetUsers {
    getUsers {
      id
      name
      rol
      comentaries {
        comentaryText
      }
    }
  }
`;

export default GET_USERS;
