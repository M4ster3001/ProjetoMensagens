import mongoose from 'mongoose'
mongoose.set('useCreateIndex', true)
mongoose.Promise = global.Promise

import app from '../../../app'

import supertest from 'supertest'
const request = supertest(app);

const txt_mensagem = 'Olá mundo !!!';
const chr_name = 'Aldo';

beforeAll( async() => {
    const url = app.get('database');
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
})

test('Salvando uma mensagem no banco de dados', async() => {   
    const response = await request.post('/mensagens/add').send({ name: chr_name, message: txt_mensagem })
    expect( response.statusCode ).toBe( 200 );
    expect( response.body.result.message ).toBe( txt_mensagem );
    expect( response.body.result._id ).toBeTruthy();
})

test('Verificando os dados salvos no banco de dados', async() => {  
    const response = await request.post('/mensagens/view').send({ name: chr_name, message: txt_mensagem });
    expect( response.statusCode ).toBe( 200 );
    expect( response.body.message ).toBeTruthy();
    expect( response.body._id ).toBeTruthy();
})

test('Deletando registro do banco de dados', async() => {
    const response = await request.post('/mensagens/delete').send({ message: txt_mensagem });
    expect( response.statusCode ).toBe( 200 );
})

async function removeAllCollections() {
    const collections = Object.keys( mongoose.connection.collections );
    for( const collectionName of collections ){
        const collection = mongoose.connection.collections[collectionName];
        await collection.deleteMany();
    }
}

afterAll( async() => {
    await removeAllCollections();
    await mongoose.connection.close();
})