import { Resolver } from 'types';
import comentaryResolvers from '@graphql/server/comentary/resolvers';

const globalResolvers: Resolver[] = [comentaryResolvers];

export { globalResolvers };
