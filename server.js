require('dotenv').config({ path: 'variables.env' });

import mongoose from 'mongoose'

//Conexão com o banco de dados
mongoose.connect(( process.env.NODE_DEV == 'teste' ? process.env.DATABASE_TEST : process.env.DATABASE ), { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = global.Promise
mongoose.connection.on('error', ( error ) => { console.log('Erro: ' + error.message) })

//Carregamento de Models
import Mensagem from './src/models/Mensagens'
import Logs from './src/models/Log'

import app from './app'

app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => { console.log('Servidor rodando na porta: ' + app.get('port')); })