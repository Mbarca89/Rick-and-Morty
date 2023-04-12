import style from "./Card.module.css"
import { NavLink } from "react-router-dom";
import {addFav,removeFav} from '../../redux/actions'
import { connect } from 'react-redux';
import { useState,useEffect } from "react";

function Card({id,name,status,species,gender,origin,image,onClose,addFav,removeFav,myFavorites}) {
   
   const [isFav,setIsFav] = useState(false)
   
   const handleFavorite = () =>{
      console.log(id)
      if(isFav){
         setIsFav(false)
         removeFav(id)
      }
      if(!isFav){
         setIsFav(true)
         addFav({id,name,status,species,gender,origin,image})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div key={id} className={style.card}>
         {isFav?(<button className={style.favButton} onClick={handleFavorite}>❤️</button>) : 
                  (<button className={style.favButton} onClick={handleFavorite}>🤍</button>)}
         {onClose?<button onClick={() => {onClose({id}); handleFavorite()}} className={style.button}>X</button>:null}
         <div className={style.imageContainer}>
         <img src={image} alt='' className={style.image}/>
            <NavLink className={style.link} to={`/detail/${id}`}><h2 className={style.name}>{name}</h2></NavLink>
         </div>         
         <div className={style.elements}>                     
            <h2 className={style.h2}>Status: {status}</h2>
            <h2 className={style.h2}>Species: {species}</h2>
            <h2 className={style.h2}>Gender: {gender}</h2>
            {/* <h2 className={style.h2}>{origin.name}</h2> */}
         </div>
         
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}

const mapStateToProps = (state) => {
      return {myFavorites: state.myFavorites}
}

export default connect(mapStateToProps,mapDispatchToProps)(Card)
