import { useState } from "react"
import Validations from './validations'
import style from '../Form/Form.module.css'

function Form ({login}) {

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    })

    const onChangeHandler = (event) => {
        // console.log(userData)
        setUserData({
            ...userData,
            [event.target.name]:event.target.value
        })
        // console.log(userData)
        // if(Validations(userData)){
        // setErrors({
        //     ...errors,
        //     email: 'por favor, revisa tu email, rey/reina'
        // })

        // } else setErrors({...errors, email: ''})
        // if(Validations(userData)){
        //     setErrors({
        //         ...errors,
        //         password: 'tiene que tener un mínimo de 6 caracteres'
        //     })
        // }else setErrors({...errors, password: ''})
    }
    
    const handleSubmit = (event) =>{
        event.preventDefault()
        login(userData)
    }

    return(
        <>
        <div >
            <form className={style.container}>
                <input className={style.bar} name='email' type="text" value={userData.email} onChange={onChangeHandler}/>
                <label className={style.label} htmlFor='email'>Email</label>
                {errors.email && <p>{errors.email}</p>}
                <input className={style.bar} name='password' type="text" value={userData.password} onChange={onChangeHandler}/>
                <label className={style.label} htmlFor='password'>Contraseña</label>
                {errors.password && <p>{errors.password}</p>}
                <button className={style.button} onClick={handleSubmit} >Submit</button>
            </form>
            </div>
        </>
    )

}

export default Form

