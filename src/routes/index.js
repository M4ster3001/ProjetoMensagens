import express from 'express'
require('dotenv').config({ path: 'variables.env' })

//Carregamento dos Controllers
import { insertMessage, viewMessage, deleteMessage } from '../controllers/mensagensController'
import { insertLog } from '../controllers/logController'

const router = express.Router();

//Rotas
if( process.env.NODE_DEV == 'teste' ){
    router.get('/', (req, res) => { res.status(200).json({ message: 'Ok get' }); })
    router.post('/', (req, res) => { res.status(200).json({ message: 'Ok post' }); })
}

router.get('/', homeController.index)
router.post('/mensagem/add', insertMessage)
router.post('/mensagem/view', viewMessage)
router.post('/mensagem/delete', deleteMessage)

router.post('/log/add', insertLog)

export default router;