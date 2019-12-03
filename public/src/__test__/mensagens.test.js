import supertest from 'supertest'
import app from '../../../app'

const request = supertest(app);

test('testando endpoints das mensagens', () => {
    request.get('/mensagens').set('Accept', 'application/ json').expect('Content-Type', /json/).expect( 200 )
})

test('testando função que converte a mensagem', async () => {
    const des_mensagem = 'Preciso converter';
    const response = await request.post('/mensagens/convertMessageNumber').send({ message: des_mensagem })

    expect( response.statusCode ).toBe( 200 );
    expect( response.body.result ).toBe( '7_7773322244477776660222666_6688833777833777' )
})

test('testando função que converte os números em letras', async () => {
    const response = await request.post('/mensagens/convertNumberMessage').send({ message: '7_7773322244477776660222666_66888337778337770' })

    expect( response.statusCode ).toBe( 200 );
    expect( response.body.result ).toBe( 'PRECISO CONVERTER' )
})