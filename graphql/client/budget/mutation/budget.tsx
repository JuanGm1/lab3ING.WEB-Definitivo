import { gql } from '@apollo/client';

const CREATE_BUDGET = gql`
  mutation Mutation($destinationId: ID) {
    createBudget(destinationID: $destinationId) {
      id
    }
  }
`;

export { CREATE_BUDGET };
