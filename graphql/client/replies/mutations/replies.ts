import { gql } from '@apollo/client';

const CREATE_REPLY = gql`
  mutation CreateReply($comentaryId: ID, $userId: ID, $replyText: String) {
    createReply(
      comentaryId: $comentaryId
      userId: $userId
      replyText: $replyText
    ) {
      id
      user {
        name
      }
    }
  }
`;

export { CREATE_REPLY };
