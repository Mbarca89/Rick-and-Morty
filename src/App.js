import './App.css';
import axios from 'axios';
import Nav from './components/Nav/Nav.jsx'
import Cards from './components/Cards/Cards.jsx';
import { useState } from 'react';





function App() {
   
   const [characters,setCharacters] = useState([])

   function onClose ({id}) {
      setCharacters(characters.filter(buscaId => buscaId.id!==parseInt(id,10)))
   }
  
   function onSearch({id}) {
      
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         let res = true
         characters.forEach(element => {
            if (element.id === data.id) res=false
         })
         if (data.name) {
            if (res===true){
            setCharacters((oldChars) => [...oldChars, data]);
         }else {
            window.alert('Ya se esta mostrando este personaje!')
         }
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
      document.getElementById('bar').focus()
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Cards characters={characters} onClose={onClose}/>
      </div>
   );
}


export default App;
