import style from './Nav.module.css'
import SearchBar from '../SearchBar/SearchBar.jsx';
import { NavLink } from 'react-router-dom';

function Nav ({onSearch}) {
    return(
        <>
        <div className={style.nav}>
        <SearchBar onSearch={onSearch} />
        </div>
        <div className={style.navBar}>
        <button className={style.button}>
            <NavLink className={style.link} to='/home'>Home</NavLink>
        </button>
        <button className={style.button}>
            <NavLink className={style.link} to='/about'>About</NavLink>
        </button>
        
        </div>
        </>
    )
}

export default Nav