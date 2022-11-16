import { gql } from '@apollo/client';

const GET_COMMENTARY = gql`
  query Query($getComentaryId: ID) {
    getComentary(id: $getComentaryId) {
      comentaryText
    }
  }
`;

const GET_COMMENTARIES = gql`
  query Query {
    getComentaries {
      comentaryText
      replies {
        replyText
      }
    }
  }
`;

export { GET_COMMENTARY, GET_COMMENTARIES };
export default GET_COMMENTARY;
