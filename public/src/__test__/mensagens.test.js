import supertest from 'supertest'
import app from '../../../app'

const request = supertest(app);

test('testando endpoints das mensagens', () => {
    request.get('/mensagem').set('Accept', 'application/ json').expect('Content-Type', /json/).expect( 200 )
})

test('testando função que converte a mensagem', async () => {
    const des_mensagem = 'Preciso converter';
    const response = await request.post('/mensagem/convert').send({ message: des_mensagem })

    expect( response.statusCode ).toBe( 200 );
    expect( response.body.result ).toBe( '7_7773322244477776660222666_6688833777833777' )
})