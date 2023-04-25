// const http = require('http')
// const {getCharById} = require ('./controllers/getCharById')
const express = require('express')
const server = express()
const PORT = 3001
const routes = require('./routes/index')

server.listen (PORT, () => {
    console.log(`Server raised in port: ${PORT}`)
})

server.use(express.json())

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });
 
 server.use('/rickandmorty',routes)
 

// http.createServer((request,response) => {
//     response.setHeader('Access-Control-Allow-Origin', '*')
//     const url = request.url.split('/')
//     if(url.includes('rickandmorty') && url.includes('character')) {
//         getCharById(response,url.at(-1))
//         // response.writeHead(200, {"Content-type": "application/json"})
//         // const id = url.at(-1)
//         // const character = chars.find(char => char.id === Number(id))
//         // return response.end(JSON.stringify(character))
//     }
// })
// .listen(3001)