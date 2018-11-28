import {database} from '../../../libs/firebase';

const binResolver = {
  Query: {
    getBins: async () => {
      const bins = await database.ref('/bins').once('value').then(snapshot => {
        const output = [];
        for(var key in snapshot.val()) {
          let {peripheral, latlng, title, description} = snapshot.val()[key];
          output.push({
            peripheral,
            latlng,
            title,
            description
          });
        }
        return output;
      });
      return bins;
    }
  },
  Mutation: {
    createBin: (root, {input}) => {
      const bin = database.ref('/bins').push(input);
      return bin.key;
    },
    // updateBin: (root, {id, input}) => {
    //   console.log(id, input);
    // },
    // deleteBin: (root, {id}) => {
    //   console.log(id)
    //   return "OK"
    // }
  }
};

export default binResolver;