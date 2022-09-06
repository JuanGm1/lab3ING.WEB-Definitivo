import prisma from '@config/prisma';
import { Resolver } from 'types';

const travelResolvers: Resolver = {
  Travel: {
    users: async (parent, args) => {
      const users = await prisma.user.findMany({
        where: {
          travels: {
            some: {
              travelId: parent.id,
            },
          },
        },
      });
      return users;
    },
    destinations: async (parent, args) => {
      const destinations = await prisma.destination.findMany({
        where: {
          travels: {
            some: {
              travelId: parent.id,
            },
          },
        },
      });
      return destinations;
    },
  },

  Query: {
    getTravels: async () => {
      const travels = await prisma.travel.findMany();
      return travels;
    },
    getUsersTravel: async (parent, args) => {
      const conteo = await prisma.usersOnTravels.count({
        where: {
          travelId: args.id,
        },
      });
      return conteo;
    },
    getUserTravel: async (parent, args) => {
      const travel = await prisma.usersOnTravels.findUnique({
        where: {
          travelId_userId: {
            travelId: args.travelId,
            userId: args.userId,
          },
        },
      });
      return travel;
    },
    getTravel: async (parent, args) => {
      const travel = await prisma.travel.findUnique({
        where: {
          id: args.id,
        },
      });
      return travel;
    },
  },
  Mutation: {
    createTravel: async (parent, args) => {
      const travel = await prisma.travel.create({
        data: {
          name: args.name,
          startDate: new Date(args.startDate),
          endDate: new Date(args.endDate),
        },
      });
      return travel;
    },
    updateTravel: async (parent, args) => {
      const updateTravel = await prisma.travel.update({
        where: {
          id: args.id,
        },
        data: {
          name: args.name,
          startDate: new Date(args.startDate),
          endDate: new Date(args.endDate),
        },
      });
      return updateTravel;
    },
    deleteTravel: async (parent, args) => {
      const deleteTravel = await prisma.travel.delete({
        where: {
          id: args.id,
        },
      });
      return deleteTravel;
    },
    addDestinationsOnTravel: async (parent, args) => {
      const destination = await prisma.destinationsOnTravels.create({
        data: {
          destinationId: args.destinationId,
          travelId: args.travelId,
        },
      });
      return destination;
    },
    deleteDestinationsOnTravel: async (parent, args) => {
      const destination = await prisma.destinationsOnTravels.delete({
        where: {
          travelId_destinationId: {
            travelId: args.travelId,
            destinationId: args.destinationId,
          },
        },
      });
      return destination;
    },
    addUserOnTravel: async (parent, args) => {
      const user = await prisma.usersOnTravels.create({
        data: {
          userId: args.userId,
          travelId: args.travelId,
        },
      });
      return user;
    },
    updateUserOnTravel: async (parent, args) => {
      const updateUT = await prisma.usersOnTravels.update({
        where: {
          travelId_userId: {
            travelId: args.travelId,
            userId: args.userId,
          },
        },
        data: {
          userId: args.newuserId,
          travelId: args.newtravelId,
        }
      });
      return updateUT;
    },
    deleteUserOnTravel: async (parent, args) => {
      const user = await prisma.usersOnTravels.delete({
        where: {
          travelId_userId: {
            travelId: args.travelId,
            userId: args.userId,
          },
        },
      });
      return user;
    },
  },
};

export default travelResolvers;
