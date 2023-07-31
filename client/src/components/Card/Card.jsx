import { NavLink } from "react-router-dom";
import style from "./Card.module.css";

const Card = ({ id, name, image, Temperaments, weight, height }) => {
  return (
    <div className={style.cardContainer}>
      <NavLink to={`/detail/${id}`}>
        <img src={image} alt={name} />
        <h2>Name: {name}</h2>
      {/* <h2>Weight: {weight}</h2> */}
        <h2> Weight: {weight} kg</h2>
        <h3>
          Temperaments: {Temperaments}
          
        </h3>
      </NavLink>
    </div>
  );
};

export default Card;
