import style from './Nav.module.css'
import SearchBar from '../SearchBar/SearchBar.jsx';
export default function Nav ({onSearch}) {
    return(
        <div className={style.nav}>
        <SearchBar onSearch={onSearch} />
        </div>
    )
}

