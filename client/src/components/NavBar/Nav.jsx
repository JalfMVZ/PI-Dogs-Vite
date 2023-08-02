import { NavLink } from "react-router-dom";
import style from "./Nav.module.css";
import SearchBar from '../SearchBar/Search'

const NavBar = () => {
  return (
    <div className={style.navCont}>
      <NavLink to="/home" className={style.navLink} activeClassName={style.active}>
        Home
      </NavLink>
      <NavLink to="/dogs" className={style.navLink} activeClassName={style.active}>
        Create
      </NavLink>
      <NavLink to="/" className={style.navLink} activeClassName={style.active}>
        Exit
      </NavLink>
      <SearchBar/>
    </div>
  );
};

export default NavBar;