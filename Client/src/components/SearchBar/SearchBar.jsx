import styles from "./SearchBar.module.css"
import {useState } from 'react';

export default function SearchBar({onSearch}) {
   
   const [id,setId] = useState('')
   const idHandler = (event) => {
      setId(event.target.value)
   }
   
   const keyHandler = (event) =>{
      if (event.key === 'Enter'){
         onSearch({id})
         setId('')
         // const element = document.getElementById('cardsContainer')
         // element.scrollTop = element.scrollHeight
      }
   }

   return (
      <div className={styles.search}>
         <input id='bar' type='search' className={styles.bar} value={id} onKeyDown={keyHandler} onChange={idHandler} placeholder="Ingrese una ID"/>
         <button onClick={() => {onSearch({id}); setId('')}} className={styles.button}>Agregar</button>
         
      </div>
   );
   
}
