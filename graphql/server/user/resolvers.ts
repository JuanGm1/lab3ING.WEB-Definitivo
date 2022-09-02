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
    }, likes: async (parent, args) => {
      const likes = await prisma.like.findMany({
        where: {
          userId: parent.id,
        },
      });
      return likes;
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
    createUser: async (parent, args) => {
      const user = await prisma.user.create({
        data: {
          name: args.name,
          username: args.username,
          password: args.password,
          rol: args.rol,
        },
      });
      return user;
    },
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
