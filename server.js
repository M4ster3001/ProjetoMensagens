require('dotenv').config({ path: 'variables.env' });

import mongoose from 'mongoose'

//Conexão com o banco de dados

//Carregamento de Models

import app from './app'

app.set('port', process.env.PORT || 7777);
const server = app.listen(get('port'), () => { console.log('Servidor rodando na porta: ' + get('port')); })