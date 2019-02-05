import { actors, getById } from "./db";
// first resolver for the name query that returns tom - see schema.graphql
const resolvers = {
  Query: {
    actors: () => actors,
    actor: (_, { id }) => getById(id)
  }
};

export default resolvers;
