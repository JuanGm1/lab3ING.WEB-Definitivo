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
    getUsersTravel(id: ID): Int
    getUserTravel(
      travelId: String
      userId: String
    ): UsersOnTravels
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
    deleteDestinationsOnTravel(
      travelId: String
      destinationId: String
    ): DestinationsOnTravels
  }
`;

export { travelTypes };
