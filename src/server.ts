import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { ProductsResolver } from "./resolvers/products-resolver";
import path from "node:path";

async function main() {
  const schema = await buildSchema({
    resolvers: [ProductsResolver],
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await server.listen();

  console.log(`🚀 HTTP server runnning on ${url}`);
}

main();
