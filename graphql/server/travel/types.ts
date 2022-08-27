import { gql } from 'apollo-server-micro';

const travelTypes = gql`
  scalar GraphQLDate
  type Travel {
    id: ID
    name: String
    startDate: GraphQLDate
    endDate: GraphQLDate
  }

  type Query {
    getTravels: [Travel]
    getTravel(id: ID): Travel
  }

  type Mutation {
    createTravel(
      name: String
      startDate: GraphQLDate
      endDate: GraphQLDate
    ): Travel
    updateTravel(id: String, name: String): Travel
  }
`;

export { travelTypes };
