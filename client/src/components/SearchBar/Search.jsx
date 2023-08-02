import { useState } from "react";
import { useDispatch } from "react-redux";
import { findedDogs } from "../../redux/actions";
import style from './Search.module.css'

export default function SearchBar() {
  const dispatch = useDispatch();
  const [dog, setDog] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setDog(value); // Eliminamos el return innecesario
  };

  const handleSubmit = () => {
    dispatch(findedDogs(dog));
    setDog("");
  };

  const handleClear = () => {
    setDog("");
  };

  // Creamos una variable para manejar la visibilidad del botón de búsqueda
  const showSearchButton = dog.trim() !== "";

  return (
    <div className={style.container}>
    <div className={style.inputContainer}>
      <input
        type="search"
        placeholder="Search..."
        value={dog}
        onChange={handleChange}
        className={style.input}
      />
      {/* Mostramos el botón de búsqueda solo cuando se ha ingresado algo */}
      {showSearchButton && (
        <button className={style.searchButton} onClick={handleSubmit}>
          Search
        </button>
      )}
      {/* Mostramos el botón de limpiar solo cuando hay algo escrito */}
      {dog.trim() !== "" && (
        <button className={style.buttonClear} onClick={handleClear}>
          Clear
        </button>
      )}
    </div>
    </div>
  );
}
