import { gql } from 'apollo-server-micro';

const entryTypes = gql`
  enum Enum_CategoryTipe {
    food
    entertainment
    transportation
    shopping
  }

  type Entry {
    id: String
    budget: Budget
    amount: Float
    category: Enum_CategoryTipe
  }

  type Query {
    getEntries: [Entry]
    getEntry(id: ID): Entry
  }

  type Mutation {
    createEntry(amount: Float, budgetID: ID, category: Enum_CategoryTipe): Entry
    updateEntry(
      id: String
      amount: Float
      budgetID: ID
      category: Enum_CategoryTipe
    ): Entry
    deleteEntry(id: String): Entry
  }
`;

export { entryTypes };
