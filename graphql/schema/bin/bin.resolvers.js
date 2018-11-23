import bin from '../../mock/bin.json';

const binResolver = {
  Query: {
    getBins: () => bin
  },
  Mutation: {
    createBin: (root, {input}) => {
      console.log(input)
      return bin[0]
    },
    updateBin: (root, {id, input}) => {
      console.log(id, input);
    },
    deleteBin: (root, {id}) => {
      console.log(id)
      return "OK"
    }
  }
};

export default binResolver;