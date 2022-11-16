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
const GET_TRAVEL_DATA = gql`
  query GetTravel($getTravelId: ID) {
    getTravel(id: $getTravelId) {
      name
      destinations {
        name
        budget {
          entries {
            amount
          }
        }
      }
    }
  }
`;

const GET_USER_ON_TRAVEL = gql`
  query Query($getCountUsersOnTravelId: ID) {
    getCountUsersOnTravel(id: $getCountUsersOnTravelId)
  }
`;

export { GET_TRAVEL, GET_USER_ON_TRAVEL, GET_TRAVEL_DATA };
