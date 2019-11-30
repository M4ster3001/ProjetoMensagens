import express from 'express'

const router = express.Router();

//Carregamento dos Controllers
import { insertMessage, viewMessage } from '../controllers/mensagensController'
import Mensagens from '../models/Mensagens';


//Rotas
router.get('/', (req, res) => { res.status(200).json({ message: 'Ok get' }); })
router.post('/', (req, res) => { res.status(200).json({ message: 'Ok post' }); })

router.post('/mensagem/add', async(req, res) =>{
    const { name, message } = req.body 
    const msg = new Mensagens({ name, message })
    const ret = await msg.save()
    res.json(ret)
})

router.post('/mensagem/view', viewMessage)

export default router;