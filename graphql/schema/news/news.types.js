const newTypes = `
  type New {
    title: String
    date: Date
    content: String
    readCount: Int
  }
  type Query {
    getNews: [New]
  }
`;

export default newTypes;