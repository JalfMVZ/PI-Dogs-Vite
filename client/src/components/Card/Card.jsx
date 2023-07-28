import { NavLink } from "react-router-dom";
import style from "./Card.module.css";

const Card = ({ id, name, image, temperaments, weight, height }) => {
  return (
    <div className={style.cardContainer}>
      <NavLink to={`/detail/${id}`}>
        <h2>Name: {name}</h2>
        <h2>Weight: {weight}</h2>
        <h2>Height: {height}</h2>
        <h3>
          Temperaments:{" "}
          {Array.isArray(temperaments) ? temperaments.join(", ") : temperaments}{" "}
        </h3>
        <img src={image} alt={name} />
      </NavLink>
    </div>
  );
};

export default Card;
