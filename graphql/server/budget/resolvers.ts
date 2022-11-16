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
    getBudget: async (parent, args) => {
      const budget = await prisma.budget.findUnique({
        where: {
          id: args.id,
        },
      });
      return budget;
    },
  },
  Mutation: {
    createBudget: async (parent, args) => {
      const budget = await prisma.budget.create({
        data: {
          destinationId: args.destinationID,
        },
      });
      return budget;
    },
    deleteBudget: async (parent, args) => {
      const budget = await prisma.budget.delete({
        where: {
          id: args.id,
        },
      });
      return budget;
    },
    updateBudget: async (parent, args) => {
      const budget = await prisma.budget.update({
        where: {
          id: args.id,
        },
        data: {
          destinationId: args.destinationID,
        },
      });
      return budget;
    },
  },
};

export default budgetResolvers;
