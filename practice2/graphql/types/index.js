import { mergeTypes } from "merge-graphql-schemas";

import User from "./User";

console.log('User: ', User)

const typeDefs = [User];

console.log('typeDefs: ', typeDefs)

export default mergeTypes(typeDefs, { all: true });
