const Validations = (userData, eventName) => {
    console.log('esto es lo que recibe la funcion validations')
    console.log(userData)
    let res = {
        email: {
            email1: '',
            email2: ''
            },
        password: {
            password1: '',
            password2: ''
            }
        }
    if(eventName==='email'){
        if(!/\S+@\S+\.\S+/.test(userData.email)){
            res.email.email1 = 'Eso no parece un email valido'
            }
        
        else {
            res.email.email1 = ''
        }

        if(userData.email.length>35){
            res.email.email2 = 'El email no puede tener mas de 35 caracteres'
        }

        else {
            res.email.email2 = ''
        }
        return res
    }

    if(eventName==='password'){
        if(10 < userData.password.length || userData.password.length < 6 ){
            res.password.password1 = 'La contraseña debe tener entre 6 y 10 caracteres'
            }
        else {
            res.password.password1 = ''
        }
   
        if(!/[0-9]/.test(userData.password)){
            res.password.password2 = 'La contraseña debe tener un numero'
            }

        else {
            res.password.password2 = ''
        }
        return res
    }
    
}
    

export default Validations