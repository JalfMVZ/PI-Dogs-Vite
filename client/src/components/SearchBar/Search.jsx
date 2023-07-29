import { useDispatch } from "react-redux";
import { useState } from "react";
import style from "./Search.module.css";
import { Link } from "react-router-dom"; // Importa Link para manejar la redirección
import { findedDogs } from "../../Redux/actions";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSearch = () => {
    if (input.trim() !== "") {
      dispatch(findedDogs(input));
    }
  };

  function resetSelects() {
    let selectElements = document.querySelectorAll("select.reset");
    selectElements.forEach((selectElement) => {
      selectElement.selectedIndex = 0;
    });
  }

  return (
    <div className={style.container}>
      <div className={style.inputContainer}>
        <input
          type="search"
          placeholder="Search by breed"
          value={input}
          onChange={handleChange}
          className={style.input}
        />
        {/* Reemplaza el botón de búsqueda con un enlace (Link) */}
        {input.trim() !== "" && (
          <Link to="/detail/1" onClick={handleSearch}>
            <button className={style.searchButton}>Search</button>
          </Link>
        )}
      </div>
      <button
        className={style.button}
        onClick={() => {
          setInput("");
          dispatch(findedDogs(""));
          resetSelects();
        }}
      >
        CLEAR ALL
      </button>
      <div></div>
    </div>
  );
};

export default SearchBar;
