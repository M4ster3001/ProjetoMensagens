import express from 'express'
import router from './public/src/routes/index'
import mongooseMorgan from 'mongoose-morgan'
import bodyParse from 'body-parser'

require('dotenv').config({ path: 'variables.env' });

const app = express();
app.use(express.static( __dirname + '/public' ))
app.use(bodyParse.urlencoded({ urlencoded: true }));
app.use(bodyParse.json());

app.set('database', ( process.env.NODE_DEV == 'teste' ? process.env.DATABASE_TEST : process.env.DATABASE ))

//Log
mongooseMorgan.token('id', function getId(req) {
    return req.id
});

var loggerFormat = ':id [:date[web]] ":method :url" :status :res[content-length] :response-time';
app.use(mongooseMorgan({
        collection: 'logs',
        connectionString: app.get('database'),
        user: '',
        pass: ''
    }, 
    {
        skip: function (req, res) {
            return res.statusCode < 400;
        }
    },
    loggerFormat
    //( process.env.NODE_DEV == 'teste' || process.env.NODE_DEV == 'dev' ? 'dev' : 'short' )   
) )
//console.log(morgan( loggerFormat ))

app.use('/', router);

export default app;