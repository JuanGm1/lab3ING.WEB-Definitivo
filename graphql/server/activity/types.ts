import { gql } from 'apollo-server-micro';

const activityTypes = gql`
  scalar GraphQLDate
  type Activity {
    id: ID
    description: String
    activityDate: GraphQLDate
    destination: Destination
  }

  type Query {
    getActivities: [Activity]
  }

  type Mutation {
      createActivity(
      description: String
      activityDate: GraphQLDate
      destinationID: ID
    ): Activity
    deleteActivity(id: ID): Activity
    updateActivity(description: String, activityDate: GraphQLDate, id: ID): Activity
  }
`;

export { activityTypes };
