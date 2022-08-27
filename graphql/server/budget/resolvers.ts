import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const budgetResolvers = {
  Budget: {
    destination: async (parent, args) => {
      const destination = await prisma.destination.findUnique({
        where: {
          id: parent.destinationId,
        },
      });
      return destination;
    },
  },
  Query: {
    getBudgets: async () => {
      const budgets = await prisma.budget.findMany();
      return budgets;
    },
  },
  Mutation: {
    createBudget: async (parent, args) => {
      const budget = await prisma.budget.create({
        data: {
          amount: args.amount,
          destinationId: args.destinationID,
        },
      });
      return budget;
    },
  },
};

export default budgetResolvers;
