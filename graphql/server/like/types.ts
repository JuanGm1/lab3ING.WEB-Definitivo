import { gql } from 'apollo-server-micro';

const likeTypes = gql`
  type Like {
    id: ID
    user: User
    comentary: Comentary
  }

  type Query {
    getLikes: [Like]
  }
  type Mutation {
    createLike(comentaryId: ID, userId: ID): Like
    deleteLike(id: ID): Like
  }
`;

export { likeTypes };
