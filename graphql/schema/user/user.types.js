const userTypes = `
  enum userType {
    user
    merchant
  }
  type User {
    id: Int
    username: String
    password: String
    point: Float
    fullname: String
    email: String
    type: userType
  }
  type Query {
    getUser(id: Int): User
  }
`;

export default userTypes;