import prisma from '@config/prisma';
import { Resolver } from 'types';

const budgetResolvers: Resolver = {
  Budget: {
    destination: async (parent, args) => {
      const destination = await prisma.destination.findUnique({
        where: {
          id: parent.destinationId,
        },
      });
      return destination;
    },
    entries: async (parent, args) => {
      const destination = await prisma.entry.findMany({
        where: {
          budgetId: parent.id,
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
