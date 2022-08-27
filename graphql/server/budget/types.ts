import { gql } from 'apollo-server-micro';

const budgetTypes = gql`
  type Budget {
    id: ID
    amount: Float
    destination: Destination
  }

  type Query {
    getBudgets: [Budget]
  }

  type Mutation {
    createBudget(amount: Float, destinationID: ID): Budget
  }
`;

export { budgetTypes };
