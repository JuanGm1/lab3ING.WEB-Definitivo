import { ApolloServer } from 'apollo-server-micro';
import NextCors from 'nextjs-cors';
import { NextApiRequest, NextApiResponse } from 'next';
import { globalResolvers } from '@graphql/server/resolvers';
// eslint-disable-next-line no-restricted-imports
import { GlobalTypes } from '../../graphql/server/types';

export const config = {
  api: {
    bodyParser: false,
  },
};

const Server = async (req: NextApiRequest, res: NextApiResponse) => {
  const apolloServer = new ApolloServer({
    cache: 'bounded',
    context: () => {},
    typeDefs: [...GlobalTypes],
    resolvers: [...globalResolvers],
    introspection: true,
  });

  await apolloServer.start();

  return apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await NextCors(req, res, {
    // Options
    methods: ['POST', 'OPTIONS', 'GET', 'HEAD'],
    origin: '*',
    optionsSuccessStatus: 204,
  });

  await Server(req, res);
}
