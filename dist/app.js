// import express from 'express'
// import cors from 'cors'
// import {errorMiddleware} from './middlewares/error.js'
// import morgan from 'morgan'
// in here we want to create applo server 
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import dotenv from 'dotenv';
import { Schema } from './graphqlSchema/Schema.js';
import { connetDB } from './database/database.js';
dotenv.config({ path: './.env', });
export const envMode = process.env.NODE_ENV?.trim() || 'DEVELOPMENT';
const port = Number(process.env.PORT) || 4000;
const mongodb = "mongodb://localhost:27017/graphql-jii";
connetDB(mongodb);
const Server = new ApolloServer({
    typeDefs: Schema,
    resolvers: {
        Query: {
            hello: () => "hello world mai aapka welcome",
        },
    },
});
startStandaloneServer(Server, { listen: { port }, }).then(() => { console.log('server is runing on port ' + port + " in " + envMode + " Mode."); });
//   const app = express();
//  app.use(express.json());
// app.use(express.urlencoded({extended: true}));
// app.use(cors({origin:' * ',credentials:true}));
// app.use(morgan('dev')) 
//   app.get('/', (req, res) => {
//     res.send('Hello, World!');
//   });
//   // your routes here
//   app.get("*", (req, res) => {
//     res.status(404).json({
//       success: false,
//       message: 'Page not found'
//     });
//   });
//   app.use(errorMiddleware);
// app.listen(port, () => console.log('Server is working on Port:'+port+' in '+envMode+' Mode.'));
