import { gql } from '@apollo/client';

const CREATE_ENTRIES = gql`
  mutation Mutation(
    $amount: Float
    $budgetId: ID
    $category: Enum_CategoryTipe
  ) {
    createEntry(amount: $amount, budgetID: $budgetId, category: $category) {
      id
      amount
      category
    }
  }
`;

const UPDATE_ENTRY = gql`
  mutation UpdateEntry(
    $updateEntryId: String
    $amount: Float
    $category: Enum_CategoryTipe
  ) {
    updateEntry(id: $updateEntryId, amount: $amount, category: $category) {
      id
    }
  }
`;
const DELETE_ENTRY = gql`
  mutation DeleteEntry($deleteEntryId: String) {
    deleteEntry(id: $deleteEntryId) {
      id
    }
  }
`;

export { CREATE_ENTRIES, UPDATE_ENTRY, DELETE_ENTRY };
