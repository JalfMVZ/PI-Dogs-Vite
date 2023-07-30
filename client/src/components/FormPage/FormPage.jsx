import style from "./FormPage.module.css";
//import ok from "../../assets/icon/ok.png";
import validate from "../Validations/Validations";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllTemperaments, postDog } from "../../Redux/actions";

const Form = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTemperaments());
  }, [dispatch]);

  const allTemperaments = useSelector((state) => state.allTemperaments);

  const [form, setForm] = useState({
    name: "",
    max_height: "",
    min_height: "",
    max_weight: "",
    min_weight: "",
    life_span: "",
    temperament: [],
    image: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    max_height: "",
    min_height: "",
    max_weight: "",
    min_weight: "",
    life_span: "",
    temperament: [],
    image: "",
  });

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });
    setErrors(validate({ ...form, [property]: value }));
  };

  const changeSelectHandler = (event) => {
    const value = event.target.value;
    if (!form.temperament.includes(value)) {
      setForm({ ...form, temperament: [...form.temperament, value] });
    }
  };

  const SubmitHandler = (event) => {
    event.preventDefault();
    if (!errors.name) {
      dispatch(postDog(form));
      alert("the dog breed was created successfully");
      
     
    } else {
      alert("Errors exist");
    }
  };

  return (
    <form onSubmit={SubmitHandler} className={style.formContainer}>
      <h1>Create your breed dog</h1>
      <div className={style.divInput}>
        <div className={style.containerDiv}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            className={style.input}
            value={form.name}
            onChange={changeHandler}
          />
          {/* {!errors.name && (
              <img src={ok} alt="ok" className={style.imageInput} />
            )} */}
        </div>
        {errors.name && <span className={style.spanError}>{errors.name}</span>}
      </div>
      <div className={style.divInput}>
        <div className={style.containerDiv}>
          <label htmlFor="max_height">Max-height: </label>
          <input
            type="text"
            name="max_height"
            className={style.input}
            value={form.max_height}
            onChange={changeHandler}
          />
          {/* {!errors.max_height && (
              <img src={ok} alt="ok" className={style.imageInput} />
            )} */}
        </div>
        {errors.max_height && (
          <span className={style.spanError}>{errors.max_height}</span>
        )}
      </div>
      <div className={style.divInput}>
        <div className={style.containerDiv}>
          <label htmlFor="min_height">Min-height: </label>
          <input
            type="text"
            name="min_height"
            className={style.input}
            value={form.min_height}
            onChange={changeHandler}
          />
          {/* {!errors.min_height && (
              <img src={ok} alt="ok" className={style.imageInput} />
            )} */}
        </div>
        {errors.min_height && (
          <span className={style.spanError}>{errors.min_height}</span>
        )}
      </div>
      <div className={style.divInput}>
        <div className={style.containerDiv}>
          <label htmlFor="max_weight">Max-weight: </label>
          <input
            type="text"
            name="max_weight"
            className={style.input}
            value={form.max_weight}
            onChange={changeHandler}
          />
          {/* {!errors.max_weight && (
              <img src={ok} alt="ok" className={style.imageInput} />
            )} */}
        </div>
        {errors.max_weight && (
          <span className={style.spanError}>{errors.max_weight}</span>
        )}
      </div>
      <div className={style.divInput}>
        <div className={style.containerDiv}>
          <label htmlFor="min_weight">Min-weight: </label>
          <input
            type="text"
            name="min_weight"
            className={style.input}
            value={form.min_weight}
            onChange={changeHandler}
          />
          {/* {!errors.min_weight && (
              <img src={ok} alt="ok" className={style.imageInput} />
            )} */}
        </div>
        {errors.min_weight && (
          <span className={style.spanError}>{errors.min_weight}</span>
        )}
      </div>
      <div className={style.divInput}>
        <div className={style.containerDiv}>
          <label htmlFor="life_span">Life Span: </label>
          <input
            type="text"
            name="life_span"
            className={style.input}
            value={form.life_span}
            onChange={changeHandler}
          />
          {/* {!errors.life_span && (
              <img src={ok} alt="ok" className={style.imageInput} />
            )} */}
        </div>
        {errors.life_span && (
          <span className={style.spanError}>{errors.life_span}</span>
        )}
      </div>
      <div className={style.divInput}>
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
        </div>
        <span className={style.spanError}>{errors.temperament}</span>
      </div>
      <div className={style.divInput}>
        <div className={style.containerDiv}>
          <label htmlFor="image">Image: </label>
          <input
            type="text"
            name="image"
            className={style.input}
            value={form.image}
            onChange={changeHandler}
            placeholder="Ingresar URL"
          />
          {/* {!errors.image && (
              <img src={ok} alt="ok" className={style.imageInput} />
            )} */}
        </div>
        {errors.image && (
          <span className={style.spanError}>{errors.image}</span>
        )}
      </div>
      <div></div>
      {JSON.stringify(form.temperament) === JSON.stringify([]) &&
      !form.image ? (
        <div className={style.containerTemperamentsNone}></div>
      ) : (
        <div className={style.containerTemperaments}>
          <img src={form.image} alt={form.name} className={style.imgRender} />
          <h2 className={style.titleTemperament}>Temperaments</h2>
          {form.temperament.map((element, i) => (
            <p className={style.temperaments} key={i}>
              {element}
            </p>
          ))}
        </div>
      )}

      {errors.name ||
      errors.max_height ||
      errors.min_height ||
      errors.max_weight ||
      errors.min_weight ||
      errors.life_span ? (
        <h1 className={style.errorMessage}>Please correct any errors</h1>
      ) : (
        <div className={style.containerButtons}>
          <button className={style.button}>Submit</button>
        </div>
      )}
    </form>
  );
};

export default Form;
