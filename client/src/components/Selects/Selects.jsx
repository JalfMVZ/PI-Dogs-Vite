import style from "./Selects.module.css";
import { getAllTemperaments } from "../../Redux/actions";
import { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";

// eslint-disable-next-line react/prop-types
export default function Selects({ handleSourceFilter, handleOrder,handleTemperament  }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTemperaments());
  }, [dispatch]);

  const allTemperaments = useSelector((state) => state.allTemperaments);

  const changeSelectHandler = (event) => {
    dispatch(handleTemperament(event));
  };

  return (
    <div className={style.containerDiv}>
      <label htmlFor="temperaments">Temperaments: </label>
      <select
        name="temperaments"
        onChange={changeSelectHandler}
        className={style.temperamentSalected}
      >
        {!allTemperaments ? (
          <option value="" disabled>
            ...Loading
          </option>
        ) : (
          allTemperaments.map((element) => (
            <option value={element.name} key={element.id}>
              {element.name}
            </option>
          ))
        )}

      </select>

      <select
        onChange={(event) => handleSourceFilter(event)}
        defaultValue="SOURCE"
      >
        <option value="SOURCE" disabled>
          SOURCE
        </option>
        <option value="API">API</option>
        <option value="DATABASE">DATABASE</option>
      </select>

      <select
        onChange={(event) => handleOrder(event)}
        defaultValue="ORDER BY NAME"
        className="reset"
      >
        <option value="ORDER BY NAME" disabled>
          ORDER BY NAME
        </option>
        <option value="ASCENDENT">ASCENDENT</option>
        <option value="DESCENDENT">DESCENDENT</option>
        <option value="MAX_WEIGHT">ASCENDENT</option>
        <option value="MIN_WEIGHT">DESCENDENT</option>
      </select>
    </div>
  );
}
