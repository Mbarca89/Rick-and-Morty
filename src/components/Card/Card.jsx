import style from "./Card.module.css"
import { NavLink } from "react-router-dom";

export default function Card({id,name,status,species,gender,origin,image,onClose}) {
   return (
      <div key={id} className={style.card}>
         <button onClick={() => onClose({id})} className={style.button}>X</button>
         <div className={style.imageContainer}>
         <img src={image} alt='' className={style.image}/>
            <NavLink className={style.link} to={`/detail/${id}`}><h2 className={style.name}>{name}</h2></NavLink>
         </div>         
         <div className={style.elements}>                     
            <h2 className={style.h2}>Status: {status}</h2>
            <h2 className={style.h2}>Species: {species}</h2>
            <h2 className={style.h2}>Gender: {gender}</h2>
            <h2 className={style.h2}>{origin.name}</h2>
         </div>
         
      </div>
   );
}
