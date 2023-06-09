import { useEffect, useState } from "react"
import Validations from './validations'
import style from '../Form/Form.module.css'

function Form ({login}) {

    const [userData, setUserData] = useState({
        email: '',
        password: '',
        name: ''
    })

    const [errors, setErrors] = useState({
        email: {
            email1: '',
            email2: ''
        },
        password: {
            password1:'',
            password2:''
        }
    })
    
    const handleSubmit = (event) =>{
        event.preventDefault()
        login(userData)
    }

    const onChangeHandler = (event) => {
         setUserData({
            ...userData,
            [event.target.name]:event.target.value,
            name: event.target.name
        }) 
    }

useEffect(() => {
            
    let val = Validations(userData,userData.name)

    if(userData.name === 'email'){
        setErrors({
          ...errors,
          [userData.name]: val.email
         })
    }

    if(userData.name === 'password'){
        setErrors({
            ...errors,
            password: val.password
        })
    }
},[userData])


    return (
        <>
        
            <form className={style.formContainer} >
                <div className={style.emailContainer}>
                <input className={style.bar} name='email' type="text" value={userData.email} onChange={onChangeHandler} required/>
                <label className={style.label} htmlFor='email'>Email</label>
                {errors.email.email1 && <p  className={style.validation}>{errors.email.email1}</p>}
                {errors.email.email2 && <p  className={style.validation}>{errors.email.email2}</p>}
                </div>
                <div className={style.passContainer}>
                <input className={style.bar} name='password' type="password" value={userData.password} onChange={onChangeHandler} required/>
                <label className={style.label} htmlFor='password'>Contraseña</label>
                {errors.password.password1 && <p className={style.validation}>{errors.password.password1}</p>}
                {errors.password.password2 && <p className={style.validation}>{errors.password.password2}</p>}
                </div>
                <button className={style.button} onClick={handleSubmit} >Submit</button>
            </form>
        
        </>
    )

}

export default Form

