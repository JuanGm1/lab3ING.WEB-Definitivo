import { gql } from 'apollo-server-micro';

const travelTypes = gql`
  scalar GraphQLDate
  type Travel {
    id: ID
    name: String
    startDate: GraphQLDate
    endDate: GraphQLDate
    destinations: [Destination]
    users: [User]
  }

  type DestinationsOnTravels {
    destinationId: ID
    travelId: ID
  }

  type UsersOnTravels {
    userId: ID
    travelId: ID
  }
  type Query {
    getTravels: [Travel]
    getTravel(id: ID): Travel
    getCountUsersOnTravel(id: ID): Int
  }

  type Mutation {
    createTravel(
      name: String
      startDate: GraphQLDate
      endDate: GraphQLDate
    ): Travel
    updateTravel(
      id: ID
      name: String
      startDate: GraphQLDate
      endDate: GraphQLDate
    ): Travel
    updateUserOnTravel(
      travelId: String
      userId: String
      newuserId: String
      newtravelId: String
    ): UsersOnTravels
    deleteTravel(id: String): Travel
    addDestinationsOnTravel(
      travelId: String
      destinationId: String
    ): DestinationsOnTravels
    addUserOnTravel(travelId: String, userId: String): UsersOnTravels
    deleteUserOnTravel(travelId: String, userId: String): UsersOnTravels
    updateDestinationsOnTravel(
      travelId: String
      destinationId: String
      newtravelId: String
      newdestinationId: String
    ): DestinationsOnTravels
    deleteDestinationsOnTravel(
      travelId: String
      destinationId: String
    ): DestinationsOnTravels
  }
`;

export { travelTypes };
