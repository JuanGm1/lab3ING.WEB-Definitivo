import { gql } from 'apollo-server-micro';

const travelTypes = gql`
  scalar GraphQLDate
  type Travel {
    id: ID
    name: String
    startDate: GraphQLDate
    endDate: GraphQLDate
    users: [User]
  }

  type UsersOnTravels {
    userId: ID
    travelId: ID
  }

  type Query {
    getTravels: [Travel]
    getTravel(id: ID): Travel
    getUsersTravel(id: ID): Int
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
    deleteTravel(id: String): Travel
    addUserOnTravel(userId: String, travelId: String): UsersOnTravels
    deleteUserOnTravel(userId: String, travelId: String): UsersOnTravels
  }
`;

export { travelTypes };
