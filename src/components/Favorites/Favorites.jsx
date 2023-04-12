import { connect } from 'react-redux';
import style from "./Favorites.module.css"
import Card from '../Card/Card';

const Favorites = (props) => {
    console.log(props.myFavorites)
    return (
        <div id='cardsContainer' className={style.cardsContainer}>
        <div className={style.cards}>
        
           {props.myFavorites?.map (({id,name,status,species,gender,origin,image}) => {
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
            )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps,null)(Favorites)