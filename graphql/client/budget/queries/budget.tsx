import { gql } from '@apollo/client';

const GET_BUDGET = gql`
  query Query {
    getBudgets {
      id
    }
  }
`;

export default GET_BUDGET;
