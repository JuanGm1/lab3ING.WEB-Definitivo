import { gql } from '@apollo/client';

const GET_ENTRIES = gql`
  query GetBudget($getBudgetId: ID) {
    getBudget(id: $getBudgetId) {
      id
      entries {
        id
        amount
      }
    }
  }
`;

export default GET_ENTRIES;
