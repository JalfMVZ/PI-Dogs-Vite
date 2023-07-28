import { findedDogs } from "../../Redux/reducer";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import style from "./searchBar.module.css";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  useEffect(() => {
    dispatch(findedDogs(input));
  }, [input, dispatch]); // Agregar 'dispatch' a la lista de dependencias

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
          dispatch(findedDogs(input));
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