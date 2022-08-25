import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const userResolvers = {
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
      }
}

export default userResolvers;