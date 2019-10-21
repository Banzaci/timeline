import express from 'express';
import compression from 'compression';
import cors from 'cors';
import bodyParser from 'body-parser';
import depthLimit from 'graphql-depth-limit';

import { ApolloServer, AuthenticationError } from 'apollo-server-express';
import { createServer } from 'http';

import typeDefs from './api/schema-timeline';
import resolvers from './api/resolvers-timeline';
import router from './router';

const app = express();

// const context = ({ req }) => {
//   const token = req.headers.authorization || ''
//   const splitToken = token.split(' ')[1]
//   try {
//     jwt.verify(splitToken, 'SECRET_KEY')
// } catch (e) {
//     throw new AuthenticationError(
//         'Authentication token is invalid, please log in'
//     )
//   }
// }
// https://ikbendirk.nl/posts/easy-authentication-in-graphql-with-express-and-apollo
// https://cloudnweb.dev/2019/06/graphql-with-apollo-server-and-express-graphql-series-part-1/
// https://expressjs.com/en/advanced/best-practice-performance.html#ensure-your-app-automatically-restarts

const httpServer = createServer(app);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  validationRules: [depthLimit(7)],
  // context
});

app.use('*', cors());
app.use(compression());
app.use('/api', router);

// app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: myGraphQLSchema }));

server.applyMiddleware({ app, path: '/graphql' });

httpServer.listen({ port: 4000 }, () => console.log(`\n🚀GraphQL is now running on http://localhost:4000/graphql`));

// launchctl load ~/Library/LaunchAgents/homebrew.mxcl.redis.plist
