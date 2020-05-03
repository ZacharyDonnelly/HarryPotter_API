const resolvers = {
  Query: {
    // *  Character & Characters Queries
    character: async (_, { filter: { name, actor } }, { Character }) => {
      try {
        if (name) {
          return await Character.find(
            {
              name,
            },
            (err, res) => {
              err ? console.log(err) : console.log(res);
            }
          );
        } else if (actor) {
          return await Character.find(
            {
              actor,
            },
            (err, res) => {
              err ? console.log(err) : console.log(res);
            }
          );
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
          return await Character.find({
            house,
            limit: 10,
            offset: offsetCalc,
          });
        } else if (gender) {
          return await Character.find({
            gender,
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
        return await House.find({
          name,
        });
      } catch (err) {
        console.error('OOPS! Something went wrong!', err);
      }
    },
    houses: async (_, __, { House }) => {
      try {
        return await House.find();
      } catch (err) {
        console.error('OOPS! Something went wrong!', err);
      }
    },
  },
};
export default resolvers;
