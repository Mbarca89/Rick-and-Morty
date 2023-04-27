const app = require('../src/app')
const session = require('supertest');
const agent = session(app);
const users = require('../src/utils/users')
const request = require('supertest');

describe('Test de RUTAS', () => {
describe('GET /rickandmorty/character/:id', () => {
    it('Responde con status: 200', async () => {
        await agent.get('/rickandmorty/character/1').expect(200);
    })
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
        const response = await agent.get('/rickandmorty/character/1');
        expect(response.body).toHaveProperty("id", "name", "species", "gender", "status", "origin", "image")
    })
    it('Si hay un error responde con status: 500', async () => {
        await agent.get('/rickandmorty/character/99999').expect(500);
    })
});
describe("GET /rickandmorty/login", () => {
    it('Da acceso cuando los datos de login son correctos', async () => {
        const response = await agent.get(`/rickandmorty/login?email=${users[0].email}&password=${users[0].password}`)
        expect(response.body).toEqual({access:true})
    })
    it('Si los datos de login no son correctos, no da acceso', async () => {
        const response = await agent.get(`/rickandmorty/login?email=asd&password=123`)
        expect(response.body).toEqual({access:false})
    })
})
describe('POST /rickandmorty/fav', () => {
    it('Agrega un personaje a favoritos', async () => {
        const response = await agent.post('/rickandmorty/fav/').send({id:'1',name:'test01'})
        expect(response.body).toEqual([{id:'1',name:'test01'}])
    }) 
    it('Agrega un nuevo personaje al arreglo anterior', async () => {
        const response = await agent.post('/rickandmorty/fav/').send({id:'2',name:'test02'})
        expect(response.body).toEqual([{id:'1',name:'test01'},{id:'2',name:'test02'}])
    })
   
})
describe('DELETE /rickandmorty/fav/:id', () => {
    it('Si el ID no esta en favoritos no hace nada',async () => {
        const response = await agent.delete('/rickandmorty/fav/4')
        expect(response.body).toEqual([{id:'1',name:'test01'},{id:'2',name:'test02'}])
    })
    it('Elimina el personaje que corresponda al ID enviado por URL',async () => {
        const response = await agent.delete('/rickandmorty/fav/1')
        expect(response.body).toEqual([{id:'2',name:'test02'}])
    })
})
});