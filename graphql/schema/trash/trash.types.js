const trashTypes = `
  input addTrashInput {
    code: String
    title: String
    rate: Float
  }
  type Trash {
    code: String
    title: String
    rate: Float
  }
  type Query {
    getTrash(id: String): Trash
  }
  type Mutation {
    addTrash(input: addTrashInput): String
  }
`;

export default trashTypes;