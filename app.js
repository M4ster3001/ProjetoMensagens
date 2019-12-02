import express from 'express'
import router from './src/routes/index'
import requestId from 'express-request-id'
import morgan from 'morgan'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ urlencoded: true }));

//Log
morgan.token('id', function getId(req) {
    return req.id
});

var loggerFormat = ':id [:date[web]] ":method :url" :status :res[content-length] :response-time';
app.use(morgan( loggerFormat ))


app.use('/', router);

export default app;