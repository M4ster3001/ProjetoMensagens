import express from 'express'
require('dotenv').config({ path: 'variables.env' })

//Carregamento dos Controllers
import { insertMessage, viewMessage, deleteMessage } from '../controllers/mensagensController';

if( process.env.NODE_DEV == 'teste' ){
    const log = require('../controllers/logController');
}

const router = express.Router();

//Rotas
if( process.env.NODE_DEV == 'teste' ){
    router.get('/', (req, res) => { res.status(200).json({ message: 'Ok get' }); })
    router.post('/', (req, res) => { res.status(200).json({ message: 'Ok post' }); })
    
    router.post('/mensagem/add', insertMessage)
    router.post('/mensagem/view', viewMessage)
    router.post('/mensagem/delete', deleteMessage)

    router.post('/log/add', log.insertLog)
}

//router.get('/', index.html)


export default router;