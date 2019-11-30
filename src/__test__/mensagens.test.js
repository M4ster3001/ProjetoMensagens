import supertest from 'supertest'
import app from '../../app'

const request = supertest(app);

test('testando endpoints das mensagens', () => {
    request.get('/mensagens').set('Accept', 'application/ json').expect('Content-Type', /json/).expect( 200 )
})