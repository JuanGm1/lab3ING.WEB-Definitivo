const comentaryResolvers = {
  Query: {
    getComentary: async () => [
      {
        id: '1hdjfdnffn',
        comentaryText: 'This is a comentary',
      },
    ],
  },
  Mutation: {},
};

export default comentaryResolvers;
