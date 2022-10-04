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

export { CREATE_ENTRIES };
