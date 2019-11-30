import express from 'express'

const router = express.Router();

//Carregamento dos Controllers
import { insertMessage, viewMessage, deleteMessage } from '../controllers/mensagensController'

//Rotas
router.get('/', (req, res) => { res.status(200).json({ message: 'Ok get' }); })
router.post('/', (req, res) => { res.status(200).json({ message: 'Ok post' }); })

router.post('/mensagem/add', insertMessage)
router.post('/mensagem/view', viewMessage)
router.post('/mensagem/delete', deleteMessage)

export default router;