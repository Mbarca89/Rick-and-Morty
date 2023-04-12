import { connect } from 'react-redux';
import style from "./Favorites.module.css"
import Card from '../Card/Card';
import {orderCards,filterCards} from '../../redux/actions'
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

const Favorites = (props) => {

   useEffect(() =>{
      dispatch(filterCards('Todos'))
   },[])

   const [aux, setAux] = useState(false)

   const dispatch = useDispatch()

   const handleOrder = (event) => {
   dispatch(orderCards(event.target.value))
   setAux(!aux)
   }

   const handleFilter = (event) => {
   dispatch(filterCards(event.target.value))
   }

   return (
      <>
      <div className={style.filterContainer}>
         <select className={style.selector} onChange={handleOrder}>
            <option value = 'A'>Ascendente</option>
            <option value = 'D'>Descendente</option>
         </select>
         <select className={style.selector} onChange={handleFilter}>
            <option value='Todos'>Todos</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">Unknown</option>
         </select>
         </div>
        <div id='cardsContainer' className={style.cardsContainer}>
        <div className={style.cards}>       
           {props.filteredFavs?.map (({id,name,status,species,gender,origin,image}) => {
              return(
                   <Card
                      key={id}
                      id={id}
                      name={name}
                      status={status}
                      species={species}
                      gender={gender}
                      origin={origin}
                      image={image}
                   />
               )
            })
           }
       
        </div>   
        </div>
        </>   )
}

const mapStateToProps = (state) => {
    return {
        filteredFavs: state.filteredFavs
    }
}

export default connect(mapStateToProps,null)(Favorites)