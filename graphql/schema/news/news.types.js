const newTypes = `
  scalar Date

  input createNewInput {
    title: String
    date: Date
    content: String
    photo: String
  }
  type New {
    title: String
    date: Date
    content: String
    photo: String
    readCount: Int
  }
  type Query {
    getNews: [New]
  }
  type Mutation {
    createNew(input: createNewInput): New
  }
`;

export default newTypes;