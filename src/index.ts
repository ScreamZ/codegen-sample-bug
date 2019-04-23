import { DIRECTIVES } from "@graphql-codegen/typescript-mongodb";
import ApolloFlash from "apollo-flash";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import { resolve } from "path";

/**
 * Init function
 */
async function bootstrap() {
  const Flash = new ApolloFlash({
    getUserFromId: (id) => Promise.resolve({ userId: id }),
    jwtSigningKey: "DEV--KEY",
    resolversFolderPath: resolve(__dirname, "resolvers"),
    typeDefsFolderPath: resolve(__dirname, "schema"),
    verifyOpts: {},
  });

  // Init server
  const apolloServer = new ApolloServer({
    resolvers: Flash.generateRootResolver(),
    typeDefs: [DIRECTIVES, ...Flash.generateTypeDefs()],
  });

  // Start server
  const app = express();

  apolloServer.applyMiddleware({
    app,
    cors: {
      credentials: true,
      origin: true,
    },
    path: "/",
  });

  await app.listen(4000, () => {
    // tslint:disable-next-line:no-console
    console.log(
      `🚀 [ONLINE] Server ready at http://localhost:4000${
        apolloServer.graphqlPath
      }`,
    );
  });
}

// Start application
try {
  bootstrap();
} catch (e) {
  // tslint:disable-next-line:no-console
  console.error("Application crash unexpectly");
}
