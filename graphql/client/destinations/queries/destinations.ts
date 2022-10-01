import { gql } from '@apollo/client';

const GET_DESTINATION = gql`
query getDestination(id: $getDestinationId) {
    name
    startDate
    endDate
    transportation
  }

`;

export default  GET_DESTINATION;
