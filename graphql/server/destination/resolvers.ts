import { PrismaClient } from '@prisma/client';
import { Resolver } from 'types';

const prisma = new PrismaClient();

const destinationResolvers: Resolver = {
  Destination: {
    comentaries: async (parent, args) => {
      const comentaries = await prisma.comentary.findMany({
        where: {
          destinationId: {
            equals: parent.id,
          },
        },
      });
      return comentaries;
    },
  },
  Query: {
    getDestinations: async () => {
      const destinations = await prisma.destination.findMany();
      return destinations;
    },
    getDestination: async (parent, args) => {
      const destination = await prisma.destination.findUnique({
        where: {
          id: args.id,
        },
      });
      return destination;
    },
  },
  Mutation: {
    createDestination: async (parent, args) => {
      const destination = await prisma.destination.create({
        data: {
          name: args.name,
        },
      });
      return destination;
    },
    updateDestination: async (parent, args) => {
      const updateDestination = await prisma.destination.update({
        where: {
          id: args.id,
        },
        data: {
          name: args.name,
        },
      });
      return updateDestination;
    },
  },
};

export default destinationResolvers;
