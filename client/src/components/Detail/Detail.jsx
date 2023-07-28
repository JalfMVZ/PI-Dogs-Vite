// Detail.js
import { useParams } from 'react-router-dom';
import style from './Detail.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findDogById } from '../../Redux/actions'; // Import the action

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const dog = useSelector(state => state.findedDogs); 
  
  useEffect(() => {
    dispatch(findDogById(id)); 
  }, [dispatch, id]);

  return (
    <div className={style.divDetail}>
      <h1>Detalles del perro</h1>
      <img src={dog.image} alt="" />
      <p>Nombre: {dog ? dog.name : "Cargando..."}</p>
      <p>Temperamento: {dog ? dog.Temperaments : "Cargando..."}</p>
      <p>ID: {dog ? dog.id : "Cargando..."}</p>
      <p>Peso: {dog ? dog.weight : "Cargando..."} kg</p>
      <p>Altura: {dog ? dog.height : "Cargando..."} cm</p>
    </div>
  );
};

export default Detail;
