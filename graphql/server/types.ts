// import { gql } from 'apollo-server-micro';
import { comentaryTypes } from '@graphql/server/comentary/types';
import { travelTypes } from '@graphql/server/travel/types';
import { destinationTypes } from '@graphql/server/destination/types';

// const CommonTypes = gql``;

const globalTypes = [comentaryTypes, travelTypes, destinationTypes];

export { globalTypes };