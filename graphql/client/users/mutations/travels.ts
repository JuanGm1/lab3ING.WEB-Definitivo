import { gql } from '@apollo/client';

const CREATE_TRAVEL = gql`
  mutation createTravel($name: String, $startDate: GraphQLDate, $endDate: GraphQLDate) {
    createTravel(name: $name, startDate: $startDate, endDate: $endDate) {
    name
    startDate
    endDate
  }
}
`;

export default CREATE_TRAVEL;
