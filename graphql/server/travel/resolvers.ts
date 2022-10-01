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
    getCountUsersOnTravel: async (parent, args) => {
      const count = await prisma.usersOnTravels.count({
        where: {
          travelId: args.id,
        },
      });
      return count;
    },
    getTravel: async (parent, args) => {
      console.log("--------------------------------------------------------------------------------")
      
      const travel = await prisma.travel.findUnique({
        where: {
          id: args.id,
        },
      });
      console.log(travel)
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
        },
      });
      return updateUT;
    },
    updateDestinationsOnTravel: async (parent, args) => {
      const updateDT = await prisma.destinationsOnTravels.update({
        where: {
          travelId_destinationId: {
            travelId: args.travelId,
            destinationId: args.destinationId,
          },
        },
        data: {
          destinationId: args.newdestinationId,
          travelId: args.newtravelId,
        },
      });
      return updateDT;
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
