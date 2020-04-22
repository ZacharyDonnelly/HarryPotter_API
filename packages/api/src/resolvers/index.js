export const resolvers = {
  Query: {
    character: async (_, { name }, { Character }) => {
      try {
        return await Character.findOne({
          where: {
            name,
          },
        });
      } catch (err) {
        console.error('Error!', err);
        return;
      }
    },
    characters: async (_, { page, filter: { house } }, { Character }) => {
      try {
        const offsetCalc = page * 10;
        return await Character.findAll({
          where: {
            house,
          },
          limit: 10,
          offset: offsetCalc,
        });
      } catch (err) {
        console.error(err);
        return;
      }
    },
  },
};
