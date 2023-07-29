// import axios from "axios";
// import style from './Detail.module.css'
// import { NavLink } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";

// const Detail = () => {
//   const { id } = useParams();
//   const [dog, setDog] = useState({}); // Estado y funcion que me permite modificar el estado [state, fn()]

//   useEffect(() => {
//     axios(`http://localhost:3001/dogs/${id}`).then(({ data }) => {
//       if (data.id) {
//         setDog(data);
//       } else {
//         window.alert("Cant find the detail of that country");
//       }
//     });
//     return setDog({});
//   }, [id]); // No olvidarse del ID porque genera un loop donde la API te banea

//   return (
//     <div className={style.divDetail}>
//       <h1>Detalles del perro</h1>
//       <p>ID: {dog ? dog.id : "Cargando..."}</p>
//       <img src={dog.image} alt="" />
//       <p>Nombre: {dog ? dog.name : "Cargando..."}</p>
//       <p>Altura: {dog ? dog.height : "Cargando..."} cm</p>
//       <p>Peso: {dog ? dog.weight : "Cargando..."} kg</p>
//       <p>Temperamentos: {dog ? dog.Temperaments : "Cargando..."}</p>
//       <p>Años de vida: {dog ? dog.life_span : "Cargando..."} </p>
//       <NavLink to="/home">
//         <button>GO TO HOME</button>
//       </NavLink>
//     </div>
//   );
// };

// export default Detail;

import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import style from "./Detail.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findDogById } from "../../Redux/actions"; // Import the action

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const dog = useSelector((state) => state.findedDogs);

  console.log("dog", dog);
  useEffect(() => {
    dispatch(findDogById(id));
  }, [dispatch, id]);
  return (
    <div className={style.divDetail}>
      <h1>Detalles del perro</h1>
      <p>ID: {dog ? dog.id : "Cargando..."}</p>
      <img src={dog.image} alt="" />
      <p>Nombre: {dog ? dog.name : "Cargando..."}</p>
      <p>Altura: {dog ? dog.height : "Cargando..."} cm</p>
      <p>Peso: {dog ? dog.weight : "Cargando..."} kg</p>
      <p>Temperamentos: {dog ? dog.Temperaments : "Cargando..."}</p>
      <p>Años de vida: {dog ? dog.life_span : "Cargando..."} </p>
      <NavLink to="/home">
        <button>GO TO HOME</button>
      </NavLink>
    </div>
  );
};

export default Detail;
