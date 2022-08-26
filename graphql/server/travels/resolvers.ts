const TravelResolvers = {
  Query: {
    getTravel: async () => [
      {
        id: '1',
        name: 'Vacaciones',
      },
    ],
  },
  Mutation: {},
};

export { TravelResolvers };
