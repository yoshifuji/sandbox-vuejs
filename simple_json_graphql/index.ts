//Ref: https://qiita.com/Hiroyuki_OSAKI/items/e1fc16b973fa499c32e2#fn2
import { GraphQLServer } from "graphql-yoga";

const locations = [
  { Japanese: "三鷹市", Prefecture: "Tokyo", Population: 180797 },
  { Japanese: "香取市", Prefecture: "Chiba", Population: 85193 },
];

// Definition
const typeDefs = `
    type Location {
      Japanese: String
      Prefecture: String
      Population: Int
    }
    type Query {
      locations: [Location]
    }
`;

// Response
const resolvers = <any>{
  Query: {
    locations: () => locations,
  },
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start({ port: 4040 }, () =>
  console.log(`Your GraphQL server is running now ...`)
);
