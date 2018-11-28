const binTypes = `
  input LocationInput {
    latitude: Float,
    longitude: Float
  }
  input BinInput {
    peripheral: String
    latlng: LocationInput
    title: String
    description: String
  }
  type Location {
    latitude: Float,
    longitude: Float
  }
  type Bin {
    peripheral: String
    latlng: Location
    title: String
    description: String
  }
  type Query {
    getBins: [Bin]
  }
  type Mutation {
    createBin(input: BinInput!): String
  }
`;

export default binTypes;