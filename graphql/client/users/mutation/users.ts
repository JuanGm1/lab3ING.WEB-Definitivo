import { gql } from '@apollo/client';

const CREATE_USER = gql`
  mutation CreateUser($name: String, $rol: Enum_Roles) {
    createUser(name: $name, rol: $rol) {
      id
      name
      rol
    }
  }
`;

export { CREATE_USER };
