import { gql } from 'apollo-server-micro';

const TravelsTypes = gql`
  type Travel {
    id: String
    name: String
  }

  type Query {
    getTravel(travelId: String): [Travel]
  }
  type Mutation {
    createTravel(id: String, name: String): Travel
  }
`;

export { TravelsTypes };
