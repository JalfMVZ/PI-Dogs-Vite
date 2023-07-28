// NavBar.js
import { NavLink } from "react-router-dom";
import style from "./Nav.module.css";

const NavBar = () => {
  return (
    <div className={style.container}>
      <div className={style.buttons}>
        <div className={style.buttonContainer}>
          <NavLink to="/home" className={style.button}>
            Home
          </NavLink>
        </div>
        <div className={style.buttonContainer}>
          <NavLink to="/dogs" className={style.button}>
            Create
          </NavLink>
        </div>
        <div className={style.buttonContainer}>
          <NavLink to="/" className={style.button}>
            Exit
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
