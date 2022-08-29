import prisma from '@config/prisma';
import { Resolver } from 'types';

const replyResolvers: Resolver = {
  Reply: {
    comentary: async (parent, args) => {
      const comentary = await prisma.comentary.findUnique({
        where: {
          id: parent.comentaryId,
        },
      });
      return comentary;
    },
    user: async (parent, args) => {
      const user = await prisma.user.findUnique({
        where: {
          id: parent.userId,
        },
      });
      return user;
    },
  },

  Query: {
    getReplies: async args => {
      const replies = await prisma.reply.findMany();
      return replies;
    },
  },
  Mutation: {
    createReply: async (parent, args) => {
      const reply = await prisma.reply.create({
        data: {
          replyText: args.replyText,
          comentaryId: args.comentaryId,
          userId: args.userId,
        },
      });
      return reply;
    },
    updateReply: async (parent, args) => {
      const updateReply = await prisma.reply.update({
        where: {
          id: args.id,
        },
        data: {
          replyText: args.replyText,
        },
      });
      return updateReply;
    },
  },
};

export default replyResolvers;
