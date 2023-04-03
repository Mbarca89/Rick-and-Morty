import SearchBar from '../SearchBar/SearchBar.jsx';
export default function Nav () {
    return(
    <SearchBar onSearch={(characterID) => window.alert(characterID)} />
    )
}

