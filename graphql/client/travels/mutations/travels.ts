import { gql } from '@apollo/client';

const CREATE_TRAVEL = gql`
  mutation createTravel(
    $name: String
    $startDate: GraphQLDate
    $endDate: GraphQLDate
  ) {
    createTravel(name: $name, startDate: $startDate, endDate: $endDate) {
      name
      startDate
      endDate
    }
  }
`;
const UPDATE_TRAVEL = gql`
  mutation updateTravel(
    $updateTravelId: ID
    $name: String
    $startDate: GraphQLDate
    $endDate: GraphQLDate
  ) {
    updateTravel(
      id: $updateTravelId
      name: $name
      startDate: $startDate
      endDate: $endDate
    ) {
      name
    }
  }
`;
const DELETE_TRAVEL = gql`
  mutation deleteTravel($deleteTravelId: String) {
    deleteTravel(id: $deleteTravelId) {
      name
    }
  }
`;

const ADD_USER_ON_TRAVEL = gql`
  mutation AddUserOnTravel($travelId: String, $userId: String) {
    addUserOnTravel(travelId: $travelId, userId: $userId) {
      userId
      travelId
    }
  }
`;

export { CREATE_TRAVEL, UPDATE_TRAVEL, DELETE_TRAVEL, ADD_USER_ON_TRAVEL };
