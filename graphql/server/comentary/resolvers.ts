import prisma from '@config/prisma';
import { Resolver } from 'types';

const comentaryResolvers: Resolver = {
  Comentary: {
    destination: async (parent, args) => {
      const destination = await prisma.destination.findUnique({
        where: {
          id: parent.destinationId,
        },
      });
      return destination;
    },
    user: async (parent, args) => {
      const users = await prisma.user.findUnique({
        where: {
          id: parent.userId,
        },
      });
      return users;
    },
    replies: async (parent, args) => {
      const replies = await prisma.reply.findMany({
        where: {
          comentaryId: parent.id,
        },
      });
      return replies;
    },
  },
  Query: {
    getComentaries: async () => {
      const comentaries = await prisma.comentary.findMany();
      return comentaries;
    },
    getComentary: async (parent, args) => {
      const comentary = await prisma.comentary.findUnique({
        where: {
          id: args.id,
        },
      });
      return comentary;
    },
  },
  Mutation: {
    createComentary: async (parent, args) => {
      const comentary = await prisma.comentary.create({
        data: {
          comentaryText: args.comentaryText,
          destinationId: args.destinationID,
          userId: args.userID,
        },
      });
      return comentary;
    },
    updateComentary: async (parent, args) => {
      const updateComentary = await prisma.comentary.update({
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
      const deleteComentary = await prisma.comentary.delete({
        where: {
          id: args.id,
        },
      });
      return deleteComentary;
    },
  },
};

export default comentaryResolvers;
