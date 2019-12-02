import express from 'express'
import router from './src/routes/index'
import morgan from 'morgan'
require('dotenv').config({ path: 'variables.env' });

const app = express();

app.use(express.urlencoded({ urlencoded: true }));
app.use(express.json());

//Log
morgan.token('id', function getId(req) {
    return req.id
});

var loggerFormat = ':id [:date[web]] ":method :url" :status :res[content-length] :response-time';
app.use(morgan( loggerFormat ))
//console.log(morgan( loggerFormat ))

app.set('database', ( process.env.NODE_DEV == 'teste' ? process.env.DATABASE_TEST : process.env.DATABASE ))

app.use('/', router);

export default app;