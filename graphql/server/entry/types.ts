
import { gql } from 'apollo-server-micro';

const entryTypes = gql`
enum Enum_CategoryTipe {
    food
    entretainment
    transportation
    shopping
  }

  
  type Entry {
    id: String           
    budgetEntries: Int
    budget: Budget           
    category: Enum_CategoryTipe
  }

  type Query {
    getEntries: [Entry]
    getEntry(id: ID): Entry
  }

  type Mutation {
    createEntry(
        budgetEntries: Int
        budgetID: ID           
        category: Enum_CategoryTipe
    ): Entry
    updateEntry(
        id: String
        budgetEntries: Int
        budgetID: ID           
        category: Enum_CategoryTipe
    ): Entry
    deleteEntry(id: String): Entry

  }
`;

export { entryTypes };