import { gql } from '@apollo/client';

const CREATE_ACTIVITY = gql`
  mutation CreateActivity(
    $description: String
    $activityDate: GraphQLDate
    $destinationId: ID
  ) {
    createActivity(
      description: $description
      activityDate: $activityDate
      destinationID: $destinationId
    ) {
      id
      description
      activityDate
    }
  }
`;

export { CREATE_ACTIVITY };
