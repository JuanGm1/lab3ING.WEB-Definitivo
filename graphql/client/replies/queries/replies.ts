import { gql } from '@apollo/client';

const GET_TRAVEL = gql`
  query getTravel($getTravelId: ID) {
    getTravel(id: $getTravelId) {
      name
      startDate
      endDate
    }
  }
`;

export { GET_TRAVEL };
