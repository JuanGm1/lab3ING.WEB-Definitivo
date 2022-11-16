import { gql } from '@apollo/client';

const CREATE_COMMENTARIES = gql`
  mutation Mutation($comentaryText: String, $destinationId: ID, $userId: ID) {
    createComentary(
      comentaryText: $comentaryText
      destinationID: $destinationId
      userID: $userId
    ) {
      comentaryText
    }
  }
`;

const UPDATE_COMMENTARIES = gql`
  mutation UpdateComentary($updateComentaryId: String, $comentaryText: String) {
    updateComentary(id: $updateComentaryId, comentaryText: $comentaryText) {
      comentaryText
    }
  }
`;

const DELETE_COMMENTARIES = gql`
  mutation Mutation($deleteComentaryId: String) {
    deleteComentary(id: $deleteComentaryId) {
      destination {
        name
      }
    }
  }
`;

export { CREATE_COMMENTARIES, UPDATE_COMMENTARIES, DELETE_COMMENTARIES };
