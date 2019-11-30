import mongoose from 'mongoose'
mongoose.set('useCreateIndex', true)
mongoose.Promise = global.Promise

import app from '../../app'

import supertest from 'supertest'
const request = supertest(app);

beforeAll( async() => {
    const url = 'mongodb://localhost:27017/db_comunicacao_test';
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
})

test('Salvando uma mensagem no banco de dados e verificando se foi salvo', async() => {
    const txt_mensagem = 'Olá mundo !!!';
    const resp = await request.post('/mensangem/add').send({ name: 'Aldo', message: txt_mensagem })
    //expect(resp.body.message).toBe('salvo');

    const response = await request.post('/mensagem/view').send({ message: txt_mensagem });
    //let responseJson = JSON.parse( response.text );
    //console.log(response);
    //expect(response.body.message).toBeTruthy();
})