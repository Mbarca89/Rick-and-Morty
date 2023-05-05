const {User} = require('../DB_connection')

const postUser = async (req, res) => {
    try{
    const {email,password} = req.body
    if(email.length === 0 || password.length === 0){
        return res.status(400).send({message: 'Email or password is empty'})
    }
    const user = await User.create({email,password})
    return res.status(500).json(user)
}catch(error){
    return res.status(400).send({message: error.message})
}

}

module.exports = {postUser}