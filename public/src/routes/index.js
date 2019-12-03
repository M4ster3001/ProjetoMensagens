import express from 'express'
require('dotenv').config({ path: 'variables.env' });

//Carregamento dos Controllers
import { insertMessage, viewMessage, deleteMessage, convertMessageNumber, convertNumberMessage, viewsMessages } from '../controllers/mensagensController';

const router = express.Router();

//Rotas

if( process.env.NODE_DEV == 'teste' ){

    router.get('/', (req, res) => { res.status(200).json({ message: 'Ok get' }); })
    router.post('/', (req, res) => { res.status(200).json({ message: 'Ok post' }); })
    
    router.post('/mensagens/add', insertMessage)
    router.post('/mensagens/view', viewMessage)
    router.post('/mensagens/views', viewsMessages)
    router.post('/mensagens/delete', deleteMessage)
    router.post('/mensagens/convertMessageNumber', convertMessageNumber)
    router.post('/mensagens/convertNumberMessage', convertNumberMessage)

}else{

    router.post('/mensagens/convertNumbers', convertMessageNumber)
    router.post('/mensagens/convertLetters', convertNumberMessage)
    router.get('/mensagens/add/:message/:message_convertida', insertMessage)
    router.post('/mensagens/views', viewsMessages)

}


export default router;