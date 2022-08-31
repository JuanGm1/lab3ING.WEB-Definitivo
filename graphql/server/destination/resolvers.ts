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
    activities: async (parent, args) => {
      const activities = await prisma.activity.findMany({
        where: {
          destinationId: {
            equals: parent.id,
          },
        },
      });
      return activities;
    },
    budget: async (parent, args) => {
      const budget = await prisma.budget.findUnique({
        where: {
          destinationId: parent.id,
        },
      });
      return budget;
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
          startDate: new Date(args.startDate),
          endDate: new Date(args.endDate),
          transportation: args.transportation,
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
          startDate: new Date(args.startDate),
          endDate: new Date(args.endDate),
          transportation: args.transportation,
        },
      });
      return updateDestination;
    },
    deleteDestination: async (parent, args) => {
      const deleteDestination = await prisma.destination.delete({
        where: {
          id: args.id,
        },
      });
      return deleteDestination;
    },
  },
};

export default destinationResolvers;
