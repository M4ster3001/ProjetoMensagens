import mongoose from 'mongoose'
mongoose.set('useCreateIndex', true)
mongoose.Promise = global.Promise

import app from '../../app'

import supertest from 'supertest'
const request = supertest(app);

beforeAll( async() => {
    const url = app.get('database');
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
})

test('Salvando log de teste', async() => {
    const response = await request.post('/log/add').send({
        method: 'POST',
        url: 'localhost:27017/mensagens/add',
        status: 200,
        content_length: 10,
        response_time: 25.234
    })
    expect( response.statusCode ).toBe( 200 )
    expect( response.body.message ).toBe( 'save' )
})