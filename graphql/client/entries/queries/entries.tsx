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
const GET_ENTRY = gql`
  query getEntry($getEntryId: ID) {
    getEntry(id: $getEntryId) {
      id
      amount
      category
    }
  }
`;

export { GET_ENTRIES, GET_ENTRY };
