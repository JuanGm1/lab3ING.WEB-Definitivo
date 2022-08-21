import { gql } from 'apollo-server-micro';

const comentaryTypes = gql`
  type Comentary {
    id: ID!
    comentaryText: String!
    destinationID: ID!
    budgetID: ID!
    userID: ID!
  }

  type Query {
    getComentary(): Comentary
  }
`;

export default { comentaryTypes };
