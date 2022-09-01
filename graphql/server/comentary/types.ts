import { gql } from 'apollo-server-micro';

const comentaryTypes = gql`
  type Comentary {
    id: ID
    comentaryText: String
    destination: Destination
    user: User
    replies: [Reply]
    likes:[Like]
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
    deleteComentary(id: String): Comentary
  }
`;

export { comentaryTypes };
