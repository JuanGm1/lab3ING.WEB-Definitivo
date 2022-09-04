import { gql } from 'apollo-server-micro';

const budgetTypes = gql`
  type Budget {
    id: ID
    destination: Destination
    entries: [Entry]
  }

  type Query {
    getBudgets: [Budget]
    getBudget: Budget
  }

  type Mutation {
    createBudget(destinationID: ID): Budget
    deleteBudget(id: ID): Budget
    updateBudget(destinationID: ID, id: ID): Budget
  }
`;

export { budgetTypes };
