import prisma from '@config/prisma';
import { Resolver } from 'types';

const userResolvers: Resolver = {
  User: {
    comentaries: async (parent, args) => {
      const comentaries = await prisma.comentary.findMany({
        where: {
          userId: {
            equals: parent.id,
          },
        },
      });
      return comentaries;
    },
    replies: async (parent, args) => {
      const replies = await prisma.reply.findMany({
        where: {
          userId: {
            equals: parent.id,
          },
        },
      });
      return replies;
    },
    travels: async (parent, args) => {
      const travels = await prisma.travel.findMany({
        where: {
          users: {
            some: {
              userId: parent.id,
            },
          },
        },
      });
      return travels;
    },
  },
  Query: {
    getUsers: async () => {
      const users = await prisma.user.findMany();
      return users;
    },
    getUser: async (parent, args) => {
      const user = await prisma.user.findUnique({
        where: {
          id: args.id,
        },
      });
      return user;
    },
  },
  Mutation: {
    updateUser: async (parent, args) => {
      const updateUser = await prisma.user.update({
        where: {
          id: args.id,
        },
        data: {
          name: args.name,
        },
      });
      return updateUser;
    },
    deleteUser: async (parent, args) => {
      const deleteUser = await prisma.user.delete({
        where: {
          id: args.id,
        },
      });
      return deleteUser;
    },
  },
};

export default userResolvers;
