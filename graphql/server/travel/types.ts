import { gql } from 'apollo-server-micro';

const travelTypes = gql`
  type Travel {
    id: ID
    name: String
  }

  type Query {
    getTravels: [Travel]
    getTravel(id: ID): Travel
  }

  type Mutation {
    createTravel(name: String): Travel
    updateTravel(id: String, name: String): Travel
  }
`;

export { travelTypes };