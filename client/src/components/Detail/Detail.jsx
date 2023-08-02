import axios from "axios";
import style from './Detail.module.css'
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Detail = () => {
  const { id } = useParams();
  const [dog, setDog] = useState({}); // Estado y funcion que me permite modificar el estado [state, fn()]

  useEffect(() => {
    axios(`http://localhost:3001/dogs/${id}`).then(({ data }) => {
      if (data.id) {
        setDog(data);
      } else {
        window.alert("Cant find the detail of that dog");
      }
    });
    return setDog({});
  }, [id]); // No olvidarse del ID porque genera un loop donde la API te banea

  return (
    <div className={style.divDetail}>
      <h1>Detalles del perro</h1>
      <p>ID: {dog ? dog.id : "Cargando..."}</p>
      <img src={dog.image} alt="" />
      <p>Nombre: {dog ? dog.name : "Cargando..."}</p>
      <p>Max Altura: {dog ? dog.max_height : "Cargando..."} </p>
      <p>Min Altura: {dog ? dog.min_height : "Cargando..."} </p>
      <p>Max Peso: {dog ? dog.max_weight : "Cargando..."} </p>
      <p>Min Peso: {dog ? dog.min_weight : "Cargando..."} </p>
      <p>Temperamentos: {dog ? dog.Temperaments : "Cargando..."}</p>
      <p>Años de vida: {dog ? dog.life_span : "Cargando..."} </p>
      <NavLink to="/home">
        <button>GO TO HOME</button>
      </NavLink>
    </div>
  );
};

export default Detail;

