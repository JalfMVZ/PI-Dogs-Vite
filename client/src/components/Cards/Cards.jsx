// import style from "./Cards.module.css";
import Card from "../Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Paginado from "../Paginado/Paginado";
import { useLocation } from "react-router-dom";
import { getAllTemperaments, setPage } from "../../redux/actions";
import style from './Cards.module.css'

const Cards = () => {
  const temps = useSelector((state) => state.allTemperaments);
  const dogs = useSelector((state) => state.allDogs);
  const pag = useSelector((state) => state.pagination);
  


  const [selecTemps, setSelecTemps] = useState(""); // se usa para el filtro de temperamentos
  const [sourceDogs, setSourceDogs] = useState(""); // API O DB
  const [order, setOrder] = useState(""); //ordenar

  const dispatch = useDispatch();
  const { thisPage, itemsPerPage } = pag;
  const { pathname } = useLocation();
  useEffect(() => {
    dispatch(getAllTemperaments());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setPage(1));
  }, [dispatch, selecTemps, sourceDogs]);

  let dogCopy = dogs instanceof Array ? [...dogs] : [];

  switch (sourceDogs) {
    case "API":
      dogCopy = dogCopy.filter((dog) => typeof dog.id === "number");
      break;
    case "DB":
      dogCopy = dogCopy.filter((dog) => typeof dog.id === "string");
      break;
    default:
      break;
  }

  const filteredDogs = selecTemps
    ? dogCopy.filter(
        (dog) => dog.Temperaments && dog.Temperaments.includes(selecTemps)
      )
    : dogCopy;

  const orderedDogs = filteredDogs.slice().sort((a, b) => {
    switch (order) {
      case "asc":
        return a.name.localeCompare(b.name);
      case "desc":
        return b.name.localeCompare(a.name);
      case "MaxWeight":
        return b.max_weight - a.max_weight;
      case "MinWeight":
        return a.max_weight - b.max_weight;
      default:
        return 0;
    }
  });

  const totalPages = Math.ceil(orderedDogs.length / itemsPerPage);
  const startIndex = (thisPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const thisPageDogs = orderedDogs.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    dispatch(setPage(page));
  };

  const handleChange = (event) => {
    setSourceDogs(event.target.value);
  };

  const handleChangeTemp = (event) => {
    setSelecTemps(event.target.value);
  };

  const handleOrderChange = (event) => {
    const selectedOrder = event.target.value;
    switch (selectedOrder) {
      case "A":
        setOrder("asc");
        break;
      case "Z":
        setOrder("desc");
        break;
      case "MAX":
        setOrder("MaxWeight");
        break;
      case "MIN":
        setOrder("MinWeight");
        break;
      default:
        setOrder("");
        break;
    }
  };

  return (
    <div>
      <div>
      <select onChange={handleOrderChange} className={style.select}>
          <option value="default">Default</option>
          <option value="A">A-Z Abc</option>
          <option value="Z">Z-A Abc</option>
          <option value="MAX">Max to Min Weight</option>
          <option value="MIN">Min to Max Weight</option>
        </select>
        <select value={sourceDogs} onChange={handleChange} className={style.select}>
          <option value="ALL">All</option>
          <option value="API">Api</option>
          <option value="DB">Created by User</option>
        </select>

        {temps && temps.length > 0 && (
          <select value={selecTemps} onChange={handleChangeTemp}>
            <option value="">All Temperaments</option>
            {temps.map((temp) => (
              <option value={temp.name} key={temp.name}>
                {temp.name}
              </option>
            ))}
          </select>
        )}
      </div>
      <div className={style.cardsCont}>
        {thisPageDogs && thisPageDogs.length > 0 ? (
          thisPageDogs.map((dog) => {
            return (
              <Card
                key={dog?.id}
                id={dog?.id}
                name={dog?.name}
                image={dog?.image}
                maxPeso={dog?.max_weight}
                minPeso={dog?.min_weight}
                Temperaments={dog?.Temperaments}
                fromApi={dog.fromApi ? true : false}
              />
            );
          })
        ) : (
          <div>No dogs found.</div>
        )}
      </div>
      {!pathname.includes("detail") && (
        <div>
          <Paginado
            thisPage={thisPage}
            totalPages={totalPages}
            pageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};

export default Cards;

// <div className={style.cardList}>
//   <Card
//     key={dog?.id}
//     id={dog?.id}
//     name={dog?.name}
//     image={dog?.image}
//     weight={dog?.weight}
//     height={dog?.height}
//     temperaments={temperaments.}
//   />
// </div>
