import style from './App.module.css';
import axios from 'axios';
import Nav from './components/Nav/Nav.jsx'
import Cards from './components/Cards/Cards.jsx';
import Detail from './components/Detail/Detail';
import About from './components/About/About';
import Form from './components/Form/Form'
import Favorites from './components/Favorites/Favorites'
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = '5f614b83540e.3e67bff3df889ef5d660';

function App() {
   const [access,setAccess] = useState(false)
   let EMAIL = 'mauriciobarca1989@gmail.com'
   let PASSWORD = '1234567'

   const navigate = useNavigate()
   
   const login = (userData) =>{
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      } else window.alert('Usuario o contraseña incorrecta')
   }
   
const logout = () =>{
   setAccess(false)
   navigate('/')
}

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const [characters,setCharacters] = useState([])

   function onClose ({id}) {
      setCharacters(characters.filter(buscaId => buscaId.id!==id))
   }
  
   function onSearch({id}) {      
      axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
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
         <Nav onSearch={onSearch} logout={logout}/>
         <Routes>
         <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
         <Route path='/detail/:id' element={<Detail/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/' element={<Form login={login}/>}/>
         <Route path='/favorites' element={<Favorites/>}/>
         </Routes>
      </div>
   );
}


export default App;