const users = require('../utils/users')

const login = (req,res) => {
    const {email,password} = req?.query
    const found = users.filter(user => user.email === email && user.password === password)
    console.log(found.length)
    if (found.length) return res.status(200).json({access:true})
    return res.status(200).json({access:false})
    // const access = {
    //     access: undefined
    //     }
    // users.map((user) => {
    //    if(user.email === email && user.password === password){
    //     access.access = true
    //     return res.send (access)
    //    } else {access.access = false
    // res.send (access)}
    // })
}

module.exports = login