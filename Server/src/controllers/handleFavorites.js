let myFavorites = []

const postFav = (req,res) => {
    const character = req.body
    myFavorites.push(character)
    return res.json(myFavorites)
}

const deleteFav = (req,res) => {
    myFavorites = myFavorites.filter( char => char.id !== req.params.id)
    return res.json(myFavorites)
}

module.exports = {postFav,deleteFav}