// first resolver for the name query that returns tom - see schema.graphql
const resolvers = {
  Query: {
    name: () => "tom"
  }
};

export default resolvers;
