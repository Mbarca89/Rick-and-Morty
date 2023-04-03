import Card from '../Card/Card';
import style from './Cards.module.css'


export default function Cards({characters}) {
   return (
      <div className={style.cardsContainer}>
      <div className={style.cartas}>
      
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
            onClose={() => window.alert('Emulamos que se cierra la card')}
            />
         )
            })
         }
     
      </div>   
      </div>
      )
}
