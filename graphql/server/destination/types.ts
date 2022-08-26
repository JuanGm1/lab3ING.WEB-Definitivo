import { gql } from 'apollo-server-micro';

const destinationTypes = gql`
  type Destination {
    id: ID
    name: String
    comentaries: [Comentary]
  }

  type Query {
    getDestinations: [Destination]
    getDestination(id: ID): Destination
  }

  type Mutation {
    createDestination(name: String): Destination
    updateDestination(id: ID, name: String): Destination
  }
`;

export { destinationTypes };
