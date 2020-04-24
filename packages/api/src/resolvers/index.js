export const resolvers = {
  Query: {
    // *  Character & Charactera Queries
    character: async (_, { name }, { Character }) => {
      try {
        return await Character.findOne({
          where: {
            name,
          },
        });
      } catch (err) {
        console.error('OOPS! Something went wrong!', err);
        return;
      }
    },
    characters: async (_, { page, filter: { house } }, { Character }) => {
      try {
        const offsetCalc = page ? page * 10 : 0;
        return await Character.findAll({
          where: {
            house,
          },
          limit: 10,
          offset: offsetCalc,
        });
      } catch (err) {
        console.error('OOPS! Something went wrong!', err);
        return;
      }
    },
    // *  House & Houses Queries
    house: async (_, { name }, { House }) => {
      try {
        return await House.findOne({
          where: {
            name,
          },
        });
      } catch (err) {
        console.error('OOPS! Something went wrong!', err);
      }
    },
    houses: async (_, __, { House }) => {
      try {
        return await House.findAll();
      } catch (err) {
        console.error('OOPS! Something went wrong!', err);
      }
    },
  },
};
