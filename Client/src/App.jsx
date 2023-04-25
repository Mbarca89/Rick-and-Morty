import style from './App.module.css';
import axios from 'axios';
import Nav from './components/Nav/Nav.jsx'
import Cards from './components/Cards/Cards.jsx';
import Detail from './components/Detail/Detail';
import About from './components/About/About';
import Form from './components/Form/Form'
import Favorites from './components/Favorites/Favorites'
import { useState, useEffect, } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

function App() {
   const [access,setAccess] = useState(false)

   const navigate = useNavigate()
   
   const login = async (userData) =>{
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      try{
      const {data} = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(data);
         access && navigate('/home'); 
      } catch (error) {}
   }
   
const logout = () =>{
   setAccess(false)
   navigate('/')
}

   useEffect(() => {
      !access && navigate('/');
   }, [access,navigate]);

   const [characters,setCharacters] = useState([])

   function onClose ({id}) {
      setCharacters(characters.filter(buscaId => buscaId.id!==id))
   }
  
   async function onSearch({id}) {  
      try{    
      const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
      
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
         }
         if(!data) {
            window.alert('¡No hay personajes con este ID!');
         }
      } catch (error) {}
      
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