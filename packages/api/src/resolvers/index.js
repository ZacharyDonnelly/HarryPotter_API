const resolvers = {
  Query: {
    // *  Character & Characters Queries
    character: async (_, { filter: { name, actor } }, { Character }) => {
      try {
        if (name) {
          return await Character.findOne({
            where: {
              name,
            },
          });
        } else if (actor) {
          return await Character.findOne({
            where: {
              actor,
            },
          });
        }
      } catch (err) {
        console.error('OOPS! Something went wrong!', err);
        return;
      }
    },
    characters: async (_, { page, filter: { house, gender } }, { Character }) => {
      try {
        let offsetCalc;
        page === 0 || page === 1 ? (offsetCalc = 0) : (offsetCalc = page * 10 - 10);
        if (house) {
          return await Character.findAll({
            where: {
              house,
            },
            limit: 10,
            offset: offsetCalc,
          });
        } else if (gender) {
          return await Character.findAll({
            where: {
              gender,
            },
            limit: 10,
            offset: offsetCalc,
          });
        }
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
export default resolvers;
