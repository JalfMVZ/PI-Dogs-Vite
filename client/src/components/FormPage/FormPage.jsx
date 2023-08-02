import Style from "./FormPage.module.css";
//import ok from "../../assets/icon/ok.png";
import validate from "../Validations/Validations";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllTemperaments, postDog, getAllDogs } from "../../redux/actions.js";

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

  const handleDelete = (id) => {
    setForm({
      ...form,
      temperament: form.temperament.filter((temp) => temp !== id),
    });
    console.log();
  };

  const [errors, setErrors] = useState({});
  const isSubmitDisabled =
    Object.values(errors).some((error) => error !== "") ||
    Object.values(form).some(
      (value) => value === "" || form.temperament.length === 0
    );
  console.log(form);

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });
    setErrors(validate({ ...form, [property]: value }));
  };
  const changeSelectHandler = (event) => {
    const value = Number(event.target.value);
    if (!form.temperament.includes(value)) {
      setForm({ ...form, temperament: [...form.temperament, value] });
    }
  };

  const SubmitHandler = (event) => {
    event.preventDefault();
    if (!errors.name) {
      dispatch(postDog(form));
      alert("the dog breed was created successfully");
      dispatch(getAllDogs());
      setForm({
        name: "",
        max_height: "",
        min_height: "",
        max_weight: "",
        min_weight: "",
        life_span: "",
        temperament: [],
        image: "",
      });
    } else {
      alert("Errors exist");
    }
  };
  const getTemperamentName = (id) => {
    let temperament = allTemperaments.filter((temp) => temp.id == id);
    return temperament[0].name;
  };
  return (
    <div className={Style.formContainer}>
      <form onSubmit={SubmitHandler}>
        <h1>Create your breed dog</h1>
        <div className={Style.divInput}>
          <div className={Style.containerDiv}>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              className={Style.input}
              value={form.name}
              onChange={changeHandler}
            />
            {/* {!errors.name && (
              <img src={ok} alt="ok" className={Style.imageInput} />
            )} */}
          </div>
          {errors.name && (
            <span className={Style.spanError}>{errors.name}</span>
          )}
        </div>
        <div className={Style.divInput}>
          <div className={Style.containerDiv}>
            <label htmlFor="max_height">Max-height: </label>
            <input
              type="text"
              name="max_height"
              className={Style.input}
              value={form.max_height}
              onChange={changeHandler}
            />
            {/* {!errors.max_height && (
              <img src={ok} alt="ok" className={Style.imageInput} />
            )} */}
          </div>
          {errors.max_height && (
            <span className={Style.spanError}>{errors.max_height}</span>
          )}
        </div>
        <div className={Style.divInput}>
          <div className={Style.containerDiv}>
            <label htmlFor="min_height">Min-height: </label>
            <input
              type="text"
              name="min_height"
              className={Style.input}
              value={form.min_height}
              onChange={changeHandler}
            />
            {/* {!errors.min_height && (
              <img src={ok} alt="ok" className={Style.imageInput} />
            )} */}
          </div>
          {errors.min_height && (
            <span className={Style.spanError}>{errors.min_height}</span>
          )}
        </div>
        <div className={Style.divInput}>
          <div className={Style.containerDiv}>
            <label htmlFor="max_weight">Max-weight: </label>
            <input
              type="text"
              name="max_weight"
              className={Style.input}
              value={form.max_weight}
              onChange={changeHandler}
            />
            {/* {!errors.max_weight && (
              <img src={ok} alt="ok" className={Style.imageInput} />
            )} */}
          </div>
          {errors.max_weight && (
            <span className={Style.spanError}>{errors.max_weight}</span>
          )}
        </div>
        <div className={Style.divInput}>
          <div className={Style.containerDiv}>
            <label htmlFor="min_weight">Min-weight: </label>
            <input
              type="text"
              name="min_weight"
              className={Style.input}
              value={form.min_weight}
              onChange={changeHandler}
            />
            {/* {!errors.min_weight && (
              <img src={ok} alt="ok" className={Style.imageInput} />
            )} */}
          </div>
          {errors.min_weight && (
            <span className={Style.spanError}>{errors.min_weight}</span>
          )}
        </div>
        <div className={Style.divInput}>
          <div className={Style.containerDiv}>
            <label htmlFor="life_span">Life Span: </label>
            <input
              type="text"
              name="life_span"
              className={Style.input}
              value={form.life_span}
              onChange={changeHandler}
            />
            {/* {!errors.life_span && (
              <img src={ok} alt="ok" className={Style.imageInput} />
            )} */}
          </div>
          {errors.life_span && (
            <span className={Style.spanError}>{errors.life_span}</span>
          )}
        </div>
        {
          <div className={Style.divInput}>
            <div className={Style.containerDiv}>
              <label htmlFor="temperaments">Temperaments: </label>
              <select
                name="temperaments"
                onChange={changeSelectHandler}
                className={Style.temperamentSalected}
              >
                {allTemperaments.map((temp) => (
                  <option value={temp.id} key={temp.id}>
                    {temp.name}
                  </option>
                ))}
                {/* {allTemperaments ? (
                allTemperaments.map((element) => {
                  return (
                    <option value={element.Id} key={element.Id}>
                      {element.Nombre}
                    </option>
                  );
                })
              ) : (
                <h1>...Loading</h1>
              )} */}
              </select>
            </div>
            <span>{errors.temperaments}</span>
          </div>
        }
        <div className={Style.divInput}>
          <div className={Style.containerDiv}>
            <label htmlFor="image">Image: </label>
            <input
              type="text"
              name="image"
              className={Style.input}
              value={form.image}
              onChange={changeHandler}
              placeholder="Ingresar URL"
            />
            {/* {!errors.image && (
              <img src={ok} alt="ok" className={Style.imageInput} />
            )} */}
          </div>
          {errors.image && (
            <span className={Style.spanError}>{errors.image}</span>
          )}
        </div>
        <div></div>
        {JSON.stringify(form.temperament) === JSON.stringify([]) &&
        !form.image ? (
          <div className={Style.containerTemperamentsNone}></div>
        ) : (
          <div className={Style.imageContainer}>
            <img src={form.image} alt={form.name} className={Style.imageInput}/>
          </div>
        )}

        <button disabled={isSubmitDisabled}>Submit</button>
      </form> 
      <h2>Temperaments</h2>
      {form.temperament.map((element) => {
        return (
          <div className={Style.temperament} key={element}>
            <p>{getTemperamentName(element)}</p>
            <button className={Style.deleteButton}  onClick={() => handleDelete(element)}>x</button>
          </div>
        );
      })}
    </div>
  );
};

export default Form;

