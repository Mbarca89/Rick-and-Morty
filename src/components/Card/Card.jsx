import style from "./Card.module.css"
export default function Card({id,name,status,species,gender,origin,image,onClose}) {
   return (
      <div key={id} className={style.tarjeta}>
         <button onClick={onClose} className={style.boton}>X</button>
         <div className={style.recuadroImagen}>
            <img src={image} alt='' className={style.foto}/>
            <h2 className={style.nombre}>{name}</h2>
         </div>         
         <div className={style.elementos}>                     
            <h2 className={style.h2}>Status: {status}</h2>
            <h2 className={style.h2}>Species: {species}</h2>
            <h2 className={style.h2}>Gender: {gender}</h2>
            {/* <h2 className={style.h2}>{origin.name}</h2> */}
         </div>
         
      </div>
   );
}
