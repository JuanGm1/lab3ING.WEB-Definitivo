import { Resolver } from 'types';
import comentaryResolvers from '@graphql/server/comentary/resolvers';
import travelResolvers from '@graphql/server/travel/resolvers';
import destinationResolvers from '@graphql/server/destination/resolvers';

const globalResolvers: Resolver[] = [
  comentaryResolvers,
  travelResolvers,
  destinationResolvers,
];

export { globalResolvers };