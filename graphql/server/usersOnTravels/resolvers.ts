import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


const usersOnTravelsResolvers = {
UsersOnTravels:{
  user:async (parent,args) => {
    const user=prisma.user.findUnique({
      where:{
        id:parent.userId
      }
    })
    return user
  }
  
},

  Query:{
    usersOnTravel: async (parent, args) => {
      const usersOnTravel = await prisma.usersOnTravels.findMany({
        where: {
        travelId:args.travelId
        }
      })
      return usersOnTravel;
    }
  },
  Mutation: {

  
    deleteUserOnTravel: async (parent, args) => {
      const deleteUser = await prisma.usersOnTravels.delete({
        where: {
          travelId_userId: {
            travelId: args.travelId,
            userId: args.userId
          }

        }
      })
      return deleteUser;
    },
  }
}

export default usersOnTravelsResolvers;