import Card from '../Card/Card';
import style from './Cards.module.css'



export default function Cards({characters,onClose}) {
   return (
      <div id='cardsContainer' className={style.cardsContainer}>
      <div className={style.cards}>
      
         {characters.map (({id,name,status,species,gender,origin,image}) => {
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
            onClose={onClose}
            />
         )
            })
         }
     
      </div>   
      </div>
      )
}
