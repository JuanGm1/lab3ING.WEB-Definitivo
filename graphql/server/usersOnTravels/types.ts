import { gql } from 'apollo-server-micro';

const usersOnTravelsTypes = gql`

 type UsersOnTravels {
  travel: Travel
  user:   User
  }

  type Travel {
    travelId: ID
    }
type Mutation {
  deleteUserOnTravel(travelId: ID, userId: ID): UsersOnTravels
  }
  type Query{
    usersOnTravel(travelId:ID):[UsersOnTravels]
  }

`;

export { usersOnTravelsTypes };
