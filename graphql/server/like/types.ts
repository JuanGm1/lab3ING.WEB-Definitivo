import { gql } from 'apollo-server-micro';

const likeTypes = gql`
  type Like {
    id: ID
    user: User
    comentary: Comentary
  }

  type Query {
    getLikes: [Like]
    getLike(id: ID): Like
  }
  type Mutation {
    createLike(comentaryId: ID, userId: ID): Like
    updateLike(
      id: ID
      userId: String
      comentaryId: String
      ): Like
    deleteLike(id: ID): Like
  }
`;

export { likeTypes };
