import app from '../../app'
import supertest from 'supertest'

const request = supertest(app);

test('Testando JEST', () => {
    expect(1).toBe(1);
});

test('Testando o ASYNC', async() => {});

test('Verificando index get', async() => {
    const response = await request.get('/').expect(200);
    return expect(response.body.message).toBe('Ok get');
});

test('Verificando index post', async() => {
    const response = await request.post('/').expect(200);
    //console.log(response);
    return expect(response.body.message).toBe('Ok post');
});