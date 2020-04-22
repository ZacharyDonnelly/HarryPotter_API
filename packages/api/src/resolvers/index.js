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
    characters: async (_, { page, filter: { house } }, { Character, House }) => {
      try {
        const offsetCalc = page * 10;
        const { id } = await House.findOne({
          where: {
            name: house,
          },
        });
        return await Character.findAll({
          where: {
            HouseId: id,
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
