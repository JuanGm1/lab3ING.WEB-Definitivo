const comentaryResolvers = {
  Query: {
    getComentary: async () => {
      return [
        {
          id: '1',
          comentaryText: 'This is a comentary',
        },
      ];
    },
  },
  Mutation: {},
};

export default comentaryResolvers;
