const Validations = (userData) => {
    console.log(userData)
    let res
    if(!/\S+@\S+\.\S+/.test(userData.email)){
        res = true
    }
    else res = false

    if(10 < userData.password.length || userData.password.length < 6 ){
        res = true
    }
    else res = false
return res
}

export default Validations