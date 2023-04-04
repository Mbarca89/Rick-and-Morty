import style from './About.module.css'
import henry from '../../img/log-henry.png'

function About () {
    return(
        <div className={style.about}>
            <img src={henry} alt=''/>
            <h1 className={style.h1}>Rick & Morty</h1>
            <p className={style.p}>Bienvenidos! este es el proyecto de integración de "Soy Henry"<br>
            </br>Mi nombre es Mauricio Barca y estoy actualmente cursando el modulo 2 del bootcamp FullStack en la modalidad Full Time.
            <br></br><br></br>Despues de dedicarme muchos años al mantenimiento y reparacion de computadoras, me decidí finalmente a emprender este nuevo camino como programador!</p>
        </div>
    )
}

export default About