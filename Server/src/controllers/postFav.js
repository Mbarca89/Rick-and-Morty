const {Favorite} = require('../DB_connection')

const postFav = async (req,res) => {
    try{
    const {id,name,origin,status,image,species,gender} = req.body
    if(id.length === 0 || name.length === 0 || origin.length === 0 || status.length === 0 || image.length === 0 || species.length === 0 || gender.length === 0) {
        return res.status(401).send({message: 'Faltan Datos'})
    }
    const fav = await Favorite.create({id,name,origin:origin.name,status,image,species,gender})
    const allFavs = await Favorite.findAll()
    return res.status(200).json(allFavs)
} catch(error){
    return res.status(500).json({message: error.message})
}
}


module.exports = {postFav}