import style from './Nav.module.css'
import SearchBar from '../SearchBar/SearchBar.jsx';
import { NavLink,useLocation } from 'react-router-dom';

function Nav ({onSearch,logout}) {
    const loc = useLocation()
    return(        
        loc.pathname !== '/' && <>
        <div className={style.nav}>
        <SearchBar onSearch={onSearch} />
        <div className={style.navBar}>
        <NavLink className={style.link} to='/home'>
            <button className={style.button}>Home</button>
        </NavLink>
        <NavLink className={style.link} to='/about'>
            <button className={style.button}>About</button>
        </NavLink>    
        <NavLink className={style.link} to='/favorites'>    
        <button className={style.button}>Favoritos</button>
        </NavLink>        
        <button className={style.button} onClick={logout}>Logout</button>
        </div>
        </div>
       </>
    )
}

export default Nav