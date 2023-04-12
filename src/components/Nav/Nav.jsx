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
        <button className={style.button}>
            <NavLink className={style.link} to='/home'>Home</NavLink>
        </button>
        <button className={style.button}>
            <NavLink className={style.link} to='/about'>About</NavLink>
        </button>
        <button className={style.button}>
            <NavLink className={style.link} to='/favorites'>Favoritos</NavLink>
        </button>
        <button className={style.button} onClick={logout}>Logout</button>
        </div>
        </div>
       </>
    )
}

export default Nav