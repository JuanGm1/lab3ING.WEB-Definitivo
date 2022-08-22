import { Resolver } from 'types';
import { TravelResolvers } from '@graphql/server/travels/resolvers';

const globalResolvers: Resolver[] = [TravelResolvers];

export { globalResolvers };
