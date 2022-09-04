import prisma from '@config/prisma';
import { Resolver } from 'types';

const activityResolvers: Resolver = {
  Activity: {
    destination: async (parent, args) => {
      const destination = await prisma.destination.findUnique({
        where: {
          id: parent.destinationId,
        },
      });
      return destination;
    },
  },
  Query: {
    getActivities: async () => {
      const activities = await prisma.activity.findMany();
      return activities;
    },
  },
  Mutation: {
    createActivity: async (parent, args) => {
      const activity = await prisma.activity.create({
        data: {
          description: args.description,
          activityDate: new Date(args.activityDate),
          destinationId: args.destinationID,
        },
      });
      return activity;
    },
    deleteActivity: async (parent, args) => {
      const activity = await prisma.activity.delete({
        where: {
          id: args.id,
        },
      });
      return activity;
    },
    updateActivity: async (parent, args) => {
      const activity = await prisma.activity.update({
        where: {
          id: args.id,
        },
        data: {
          description: args.description,
          activityDate: new Date(args.activityDate),
        },
      });
      return activity;
    }
  },
};

export default activityResolvers;
