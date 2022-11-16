import prisma from '@config/prisma';
import { Resolver } from 'types';

const likeResolvers: Resolver = {
    Like: {
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
        getLikes: async args => {
            const likes = await prisma.like.findMany();
            return likes;
        },
    
        getLike: async (parent, args) => {
            const like = await prisma.like.findUnique({
                where: {
                    id: args.id
                },
            });
            return like;
        },
    },
    Mutation: {
        createLike: async (parent, args) => {
            const like = await prisma.like.create({
                data: {
                    comentaryId: args.comentaryId,
                    userId: args.userId,
                },
            });
            return like;
        },
        updateLike: async (parent, args) => {
            const updateLike = await prisma.like.update({
                where: {
                    id: args.id,
                },
                data: {
                    userId: args.userId,
                    comentaryId: args.comentaryId,
                },
            });
            return updateLike;
        },
        deleteLike: async (parent, args) => {
            const deletelike = await prisma.like.delete({
                where: {
                    id: args.id,
                },
            });
            return deletelike;
        },
    },
};

export default likeResolvers;
