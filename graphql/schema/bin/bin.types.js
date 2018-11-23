const binTypes = `
  input LocationInput {
    latitude: Float,
    longitude: Float
  }
  input BinInput {
    latlng: LocationInput
    title: String
    description: String
  }
  type Location {
    latitude: Float,
    longitude: Float
  }
  type Bin {
    latlng: Location
    title: String
    description: String
  }
  type Query {
    getBins: [Bin]
  }
  type Mutation {
    createBin(input: BinInput!): Bin
    updateBin(id: Int!, input: BinInput!): Bin
    deleteBin(id: Int!): String
  }
`;

export default binTypes;