const resolvers = {
  Query: {
    // *  Character & Characters Queries
    character: async (_, { filter: { name, actor } }, { Char }) => {
      try {
        if (name) {
          const data = await Char.findOne({ name });
          console.log(data);
          return data;
        } else if (actor) {
          const data = await Char.findOne({ actor });
          return data;
        }
      } catch (err) {
        console.error('OOPS! Something went wrong!', err);
        return;
      }
    },
    characters: async (_, { page, filter: { house, gender } }, { Char }) => {
      try {
        let offsetCalc;
        page === 0 || page === 1 ? (offsetCalc = 0) : (offsetCalc = page * 10 - 10);
        if (house) {
          return await Char.find({ house }).limit(10).skip(offsetCalc);
        } else if (gender) {
          return await Char.find({ gender }).limit(10).skip(offsetCalc);
        }
      } catch (err) {
        console.error('OOPS! Something went wrong!', err);
        return;
      }
    },
    // *  House & Houses Queries
    house: async (_, { name }, { House }) => {
      try {
        const data = await House.findOne({ name });
        return data;
      } catch (err) {
        console.error('OOPS! Something went wrong!', err);
      }
    },
    houses: async (_, __, { House }) => {
      try {
        const data = await House.find();
        return data;
      } catch (err) {
        console.error('OOPS! Something went wrong!', err);
      }
    },
  },
};
export default resolvers;
