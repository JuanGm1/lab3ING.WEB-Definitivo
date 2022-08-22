import { PrismaClient } from '@prisma/client';

const primsa = new PrismaClient();

const comentaryResolvers = {
  Query: {
    getComentaries: async () => {
      const comentaries = await primsa.comentary.findMany();
      return comentaries;
    },
    getComentary: async (parent, args) => {
      const comentary = await primsa.comentary.findUnique({
        where: {
          id: args.id,
        },
      });
      return comentary;
    },
  },
  Mutation: {
    createComentary: async (parent, args) => {
      const comentary = await primsa.comentary.create({
        data: {
          comentaryText: args.comentaryText,
          destinationId: args.destinationID,
          budgetId: args.budgetID,
          userId: args.userID,
        },
      });
      return comentary;
    },
  },
};

export default comentaryResolvers;
