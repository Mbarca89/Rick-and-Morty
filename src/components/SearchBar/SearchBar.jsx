import styles from "./SearchBar.module.css"
export default function SearchBar({onSearch}) {
   return (
      <div className="busqueda">
         <input type='search' className={styles.barra} />
         <button onClick={onSearch} className={styles.boton}>Agregar</button>
      </div>
   );
}
