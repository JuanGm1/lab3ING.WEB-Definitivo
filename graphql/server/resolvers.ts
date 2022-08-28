import { Resolver } from 'types';
import comentaryResolvers from '@graphql/server/comentary/resolvers';
import travelResolvers from '@graphql/server/travel/resolvers';
import destinationResolvers from '@graphql/server/destination/resolvers';
import userResolvers from '@graphql/server/user/resolvers';
import replyResolvers from '@graphql/server/reply/resolvers';
import activityResolvers from '@graphql/server/activity/resolvers';
import budgetResolvers from '@graphql/server/budget/resolvers';
import entryResolvers from '@graphql/server/entry/resolvers';

const globalResolvers: Resolver[] = [
  comentaryResolvers,
  travelResolvers,
  destinationResolvers,
  userResolvers,
  replyResolvers,
  activityResolvers,
  budgetResolvers,
  entryResolvers,
];

export { globalResolvers };
