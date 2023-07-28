import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import style from "./Search.module.css";
import { findedDogs } from "../../Redux/actions"; // Importa la acción directamente desde typeActions.js

const SearchBar = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setInput(event.target.value);
    console.log('event', event.target.value)
  };

  useEffect(() => {
    dispatch(findedDogs(input)); // Llama a la acción 'findedDogs' desde typeActions.js
  }, [input, dispatch]);

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
      </div>
      <button
        className={style.button}
        onClick={() => {
          setInput("");
          dispatch(findedDogs("")); // Llama a la acción 'findedDogs' con una cadena vacía para borrar la búsqueda
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
