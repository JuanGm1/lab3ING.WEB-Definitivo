import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const travelResolvers = {
  Travel: {
    users: async (parent, args) => {
      const users = await prisma.user.findMany({
        where: {
          travels: {
            some: {
              travelId: parent.id
            }
          }
        }
      });
      return users
    }
  },

  Query: {
    getTravels: async () => {
      const travels = await prisma.travel.findMany();
      return travels;
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
  },
};

export default travelResolvers;
