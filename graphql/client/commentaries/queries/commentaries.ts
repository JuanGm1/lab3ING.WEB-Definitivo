import { gql } from '@apollo/client';

const GET_COMMENTARY = gql`
  query Query($getComentaryId: ID) {
    getComentary(id: $getComentaryId) {
      comentaryText
    }
  }
`;

export default GET_COMMENTARY;
