const axios = require ('axios');
const URL = 'https://rickandmortyapi.com/api/character'

async function getCharById (req,res) {
    try{
    const {data} = await axios(`${URL}/${req.params.id}`)

    if (!data.name) throw Error (`ID: ${req.params.id} not found`)
        const char = {
            id: req.params.id,
            name: data.name,
            gender: data.gender,
            species: data.especies,
            origin: data.origin,
            image: data.image,
            status: data.status
        }; 
    if(data.name){            
        return res.status(200).json(char)
    }
    
    res.status(404).send('Not found')
}
    
    catch (error) {
            res.status(500).send(error.message)
    }
}


// const getCharById = (response,id) => {
//     console.log(id)
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then (res => {
//         let character = {
//             id: id,
//             name: res.data.name,
//             gender: res.data.gender,
//             species: res.data.especies,
//             origin: res.data.origin,
//             image: res.data.image,
//             status: res.data.status
//         }        
//         response.writeHead(200, {"Content-type": "application/json"})
//         return response.end(JSON.stringify(character))
//     })

//     .catch ((error) => {
//         response.writeHead(500, {"Content-type": "text/plain"})
//         console.log(error.response.data.error)
//         return response.end(error.response.data.error)
//     })
// }

module.exports = getCharById