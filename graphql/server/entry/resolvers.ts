import prisma from '@config/prisma';
import { Resolver } from 'types';

const entryResolvers: Resolver = {
  Entry: {
    budget: async (parent, args) => {
      const budget = await prisma.budget.findUnique({
        where: {
          id: parent.budgetId,
        },
      });
      return budget;
    },
  },
  Query: {
    getEntries: async () => {
      const entries = await prisma.entry.findMany();
      return entries;
    },
    getEntry: async (parent, args) => {
      const entry = await prisma.entry.findUnique({
        where: {
          id: args.id,
        },
      });
      return entry;
    },
  },
  Mutation: {
    createEntry: async (parent, args) => {
      const entry = await prisma.entry.create({
        data: {
          budgetId: args.budgetID,
          category: args.category,
          budgetEntries: args.budgetEntries,
        },
      });
      return entry;
    },
    updateEntry: async (parent, args) => {
      const entry = await prisma.entry.update({
        where: {
          id: args.id,
        },
        data: {
          budgetId: args.budgetID,
          category: args.category,
          budgetEntries: args.budgetEntries,
        },
      });
      return entry;
    },
    deleteEntry: async (parent, args) => {
      const deleteEntry = await prisma.entry.delete({
        where: {
          id: args.id,
        },
      });
      return deleteEntry;
    },
  },
};

export default entryResolvers;
