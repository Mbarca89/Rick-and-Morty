import './App.css';
import Nav from './components/Nav/Nav.jsx'
import Card from './components/Card/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
import characters, { Rick } from './data.js';

function App() {
   return (
      <div className='App'>
         <Nav/>
         <Cards characters={characters} />
      </div>
   );
}

export default App;
