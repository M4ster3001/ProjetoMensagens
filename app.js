import express from 'express'
import router from './src/routes/index'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ urlencoded: true }));

app.use('/', router);

export default app;