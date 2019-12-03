import express from 'express'
require('dotenv').config({ path: 'variables.env' });

//Carregamento dos Controllers
import { insertMessage, viewMessage, deleteMessage, convertMessageNumber } from '../controllers/mensagensController';

const router = express.Router();

//Rotas

if( process.env.NODE_DEV == 'teste' ){

    router.get('/', (req, res) => { res.status(200).json({ message: 'Ok get' }); })
    router.post('/', (req, res) => { res.status(200).json({ message: 'Ok post' }); })
    
    router.post('/mensagem/add', insertMessage)
    router.post('/mensagem/view', viewMessage)
    router.post('/mensagem/delete', deleteMessage)
    router.post('/mensagem/convert', convertMessageNumber)

}else{

    router.get('/', function(req, res) {
        console.log('Olá');
    })
    /*router.get('/', function(req, res) {
        res.render('index', { title:  'Mensagens' })
    })*/

}

export default router;