import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const activityResolvers = {
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
  },
};

export default activityResolvers;
