const userTypes = `
  enum userType {
    user
    merchant
  }
  input LoginInput {
    email: String
    password: String
  }
  input RegisterInput {
    email: String
    password: String
    fullname: String
  }
  type User {
    point: Float
    fullname: String
    type: userType
  }
  type Query {
    getUser(uid: String): User
  }
  type Mutation {
    userRegister(input: RegisterInput): String
  }
`;

export default userTypes;