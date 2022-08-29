import { gql } from 'apollo-server-micro';

const budgetTypes = gql`
  type Budget {
    id: ID
    destination: Destination
    entries: [Entry]
  }

  type Query {
    getBudgets: [Budget]
  }

  type Mutation {
    createBudget(destinationID: ID): Budget
  }
`;

export { budgetTypes };
