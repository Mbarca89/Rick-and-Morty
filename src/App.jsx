import style from './App.module.css';
import axios from 'axios';
import Nav from './components/Nav/Nav.jsx'
import Cards from './components/Cards/Cards.jsx';
import Detail from './components/Detail/Detail';
import About from './components/About/About';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

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
      <div className={style.App}>
         <Nav onSearch={onSearch}/>
         <Routes>
         <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
         <Route path='/detail:id' element={<Detail/>}/>
         <Route path='/about' element={<About/>}/>
         </Routes>
      </div>
   );
}


export default App;