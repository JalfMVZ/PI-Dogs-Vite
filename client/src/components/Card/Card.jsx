import { NavLink } from "react-router-dom";


import style from "./Card.module.css";

// el componente funcional "Card" recibe varios parámetros como props
const Card = ({ id, name, image, Temperaments, maxPeso, minPeso }) => {

  return (
    <div className={style.cardContainer}>
     
      <NavLink to={`/detail/${id}`}>
        
        <img src={image} alt={name} />

        
        <h2>Name: {name}</h2>

       
        <div>Max Weight: {maxPeso} kg</div>

        
        <div>Min Weight: {minPeso} kg</div>

        
        <h3>Temperaments: {Temperaments}</h3>
      </NavLink>
    </div>
  );
};

// Exportamos el componente "Card" para que pueda ser utilizado en otros archivos.
export default Card;
