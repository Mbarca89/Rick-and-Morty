import style from './Detail.module.css'
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from 'axios';


const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = '5f614b83540e.3e67bff3df889ef5d660';

function Detail () {
const {id} = useParams();
const [character,setCharacter] = useState({})

useEffect(() => {
    axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
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