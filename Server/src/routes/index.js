const getCharById = require('../controllers/getCharById')
const {postFav, deleteFav} = require('../controllers/handleFavorites')
const login = require('../controllers/login')
const express = require('express')
const routes = express.Router()

routes.get('/character/:id', getCharById)
routes.get('/login', login)
routes.post('/fav',postFav)
routes.delete('/fav/:id', deleteFav)

module.exports = routes