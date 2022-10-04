import { gql } from '@apollo/client';

const CREATE_DESTINATION = gql`
  mutation createDestination(
    $name: String
    $startDate: GraphQLDate
    $endDate: GraphQLDate
    $transportation: Enum_TransportationType
  ) {
    createDestination(
      name: $name
      startDate: $startDate
      endDate: $endDate
      transportation: $transportation
    ) {
      id
      name
    }
  }
`;
const UPDATE_DESTINATION = gql`
  mutation updateDestination(
    $updateDestinationId: ID
    $name: String
    $startDate: GraphQLDate
    $endDate: GraphQLDate
    $transportation: Enum_TransportationType
  ) {
    updateDestination(
      id: $updateDestinationId
      name: $name
      startDate: $startDate
      endDate: $endDate
      transportation: $transportation
    ) {
      name
    }
  }
`;
const DELETE_DESTINATION = gql`
  mutation deleteDestination($deleteDestinationId: ID) {
    deleteDestination(id: $deleteDestinationId) {
      name
    }
  }
`;

export { CREATE_DESTINATION, UPDATE_DESTINATION, DELETE_DESTINATION };
