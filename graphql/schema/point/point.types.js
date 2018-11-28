const pointTypes = `
  input PointInput {
    uid: String
    point: Float
    trashIds: [String]
  }
  type Point {
    uid: String
    point: Float
    trashIds: [String]
  }
  type Query {
    getPoints: [Point]
  }
  type Mutation {
    receivePoint(input: PointInput!): String
  }
`;

export default pointTypes;