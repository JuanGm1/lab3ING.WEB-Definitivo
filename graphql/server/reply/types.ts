import { gql } from 'apollo-server-micro';

const replyTypes = gql`
  type Reply {
    id: ID
    user: User
    comentary: Comentary
    replyText: String
  }

  type Query {
    getReplies: [Reply]
    getReply(id: ID): Reply
  }
  type Mutation {
    createReply(replyText: String, comentaryId: ID, userId: ID): Reply
    updateReply(id: ID, replyText: String): Reply
    deleteReply(id: ID): Reply
  }
`;

export { replyTypes };
