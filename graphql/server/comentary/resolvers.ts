import { PrismaClient } from '@prisma/client';

const primsa = new PrismaClient();

const comentaryResolvers = {
  Comentary: {
    destination: async (parent, args) => {
      const destination = await primsa.destination.findUnique({
        where: {
          id: parent.destinationId,
        },
      });
      return destination;
    },
  },
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
          userId: args.userID,
        },
      });
      return comentary;
    },
    updateComentary: async (parent, args) => {
      const updateComentary = await primsa.comentary.update({
        where: {
          id: args.id,
        },
        data: {
          comentaryText: args.comentaryText,
        },
      });
      return updateComentary;
    },
    deleteComentary: async (parent, args) => {
      const deleteUser = await primsa.comentary.delete({
        where: {
          id: args.id,
        },
      });
      return deleteUser;
    },
  },
};

export default comentaryResolvers;
