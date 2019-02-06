import { getActors, getById, addActor, deleteActor } from "./db";
// first resolver for the name query that returns tom - see schema.graphql
const resolvers = {
  Query: {
    actors: () => getActors(),
    actor: (_, { id }) => getById(id)
  },
  Mutation: {
    addActor: (_, { name, age, gender }) => addActor(name, age, gender),
    deleteActor: (_, { id }) => deleteActor(id)
  }
};

export default resolvers;
