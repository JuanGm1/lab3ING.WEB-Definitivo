import { Resolver } from 'types';
import comentaryResolvers from '@graphql/server/comentary/resolvers';
import userResolvers from '@graphql/server/user/resolvers';
import usersOnTravelsResolvers from '@graphql/server/usersOnTravels/resolvers';

const globalResolvers: Resolver[] = [comentaryResolvers,userResolvers,usersOnTravelsResolvers];

export { globalResolvers };
