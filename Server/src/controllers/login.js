const {User} = require('../DB_connection')

const login = async (req, res) => {
    try {
        const {email,password} = req.query
        if(email.length === 0 || password.length === 0){
            return res.status(400).send({message: 'Email or password is empty'})
        }
        const user = await User.findOne({where: {email: email}})
        if (!user){
            return res.status(404).send({message: 'Usuario no encontrado'})
        }
        if(user.password !== password){
            return res.status(403).send({message: 'Contraseña incorrecta'})
        }
        return res.status(200).json({access: true})
    } catch (error) {
         return res.status(500).send({message: error.message})
    }
}

module.exports = {login}