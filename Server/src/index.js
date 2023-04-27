// const http = require('http')
// const {getCharById} = require ('./controllers/getCharById')
const app = require('./app')
const PORT = 3001

const server = app.listen (PORT, () => {
    console.log(`Server raised in port: ${PORT}`)
})
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

module.exports = {server}