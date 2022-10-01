import { gql } from '@apollo/client';

const CREATE_USERS = gql`
  mutation createUser($input: UserInput!) {
    createUser(input: $input) {
      id
    }
  }
`;

export default CREATE_USERS;
