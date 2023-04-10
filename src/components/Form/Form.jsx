import { useState } from "react"
import Validations from './validations'
import style from '../Form/Form.module.css'

function Form ({login}) {

    const [userData, setUserData] = useState({
        email: '',
        password: ''
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

    const onChangeHandler = (event) => {
         setUserData({
            ...userData,
            [event.target.name]:event.target.value
        }) 
        console.log(userData)      
        
        let val = Validations(userData,event.target.name)

        if(event.target.name === 'email'){
            setErrors({
              ...errors,
              [event.target.name]: val.email
             })
        }

        if(event.target.name === 'password'){
            setErrors({
                ...errors,
                password: val.password
            })
        }
    }
    
    const handleSubmit = (event) =>{
        event.preventDefault()
        login(userData)
    }

    return (
        <>
        <div >
            <form >
                <div className={style.emailContainer}>
                <input className={style.bar} name='email' type="text" value={userData.email} onChange={onChangeHandler} required/>
                <label className={style.label} htmlFor='email'>Email</label>
                {errors.email.email1 && <p  className={style.validation}>{errors.email.email1}</p>}
                {errors.email.email2 && <p  className={style.validation}>{errors.email.email2}</p>}
                </div>
                <div className={style.passContainer}>
                <input className={style.bar} name='password' type="text" value={userData.password} onChange={onChangeHandler} required/>
                <label className={style.label} htmlFor='password'>Contraseña</label>
                {errors.password.password1 && <p className={style.validation}>{errors.password.password1}</p>}
                {errors.password.password2 && <p className={style.validation}>{errors.password.password2}</p>}
                </div>
                <button className={style.button} onClick={handleSubmit} >Submit</button>
            </form>
            </div>
        </>
    )

}

export default Form

