import { gql } from 'apollo-server-micro';

const comentaryTypes = gql`
  type Comentary {
    id: ID
    comentaryText: String
    destinationID: ID
    budgetID: ID
    userID: ID
  }

  type Query {
    getComentary: [Comentary]
  }

  type Mutation {
    createComentary(
      comentaryText: String
      destinationID: ID
      budgetID: ID
      userID: ID
    ): Comentary
  }
`;

export { comentaryTypes };
