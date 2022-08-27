import { gql } from 'apollo-server-micro';

const destinationTypes = gql`
  enum Enum_TransportationType {
    land
    maritime
    aerial
  }
  scalar GraphQLDate
  type Destination {
    id: ID
    name: String
    startDate: GraphQLDate
    endDate: GraphQLDate
    transportation: Enum_TransportationType
    budget: Budget
    comentaries: [Comentary]
    activities: [Activity]
  }

  type Query {
    getDestinations: [Destination]
    getDestination(id: ID): Destination
  }

  type Mutation {
    createDestination(
      name: String
      startDate: GraphQLDate
      endDate: GraphQLDate
      transportation: Enum_TransportationType
    ): Destination
    updateDestination(id: ID, name: String): Destination
  }
`;

export { destinationTypes };
