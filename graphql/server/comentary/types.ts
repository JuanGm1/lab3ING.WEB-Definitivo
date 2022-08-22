import { gql } from 'apollo-server-micro';

const comentaryTypes = gql`
  type Comentary {
    id: ID
    comentaryText: String
    destinationID: ID
    userID: ID
  }

  type Query {
    getComentaries: [Comentary]
    getComentary(id: ID): Comentary
  }

  type Mutation {
    createComentary(
      comentaryText: String
      destinationID: ID
      userID: ID
    ): Comentary
    updateComentary(id: String, comentaryText: String): Comentary
  }
`;

export { comentaryTypes };
