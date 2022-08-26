import { Resolver } from 'types';
import comentaryResolvers from '@graphql/server/comentary/resolvers';
import travelResolvers from '@graphql/server/travel/resolvers';
import destinationResolvers from '@graphql/server/destination/resolvers';
import userResolvers from '@graphql/server/user/resolvers';
import replyResolvers from '@graphql/server/reply/resolvers';

const globalResolvers: Resolver[] = [
  comentaryResolvers,
  travelResolvers,
  destinationResolvers,
  userResolvers,
  replyResolvers,
];

export { globalResolvers };
