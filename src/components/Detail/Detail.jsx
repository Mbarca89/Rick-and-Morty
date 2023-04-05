import style from './Detail.module.css'
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from 'axios';
import background from '../../img/card-background.jpg'

function Detail () {
const {id} = useParams();
const [character,setCharacter] = useState({})

useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
       
    });
    return setCharacter({});
 }, [id]);
    return(
        <div className={style.detailContainer}>
            
            <div>
                <img className={style.img} src={character?.image} alt=''/>                
            </div>

            <div>    
                <h2 className={style.h2}>{character?.name}</h2>                 
                <h2 className={style.h2}>Status: {character?.status}</h2>
                <h2 className={style.h2}>Species: {character?.species}</h2>
                <h2 className={style.h2}>Gender: {character?.gender}</h2>
                <h2 className={style.h2}>Origen: {character?.origin?.name}</h2>
            </div>        
        </div>
     
    )
}

export default Detail