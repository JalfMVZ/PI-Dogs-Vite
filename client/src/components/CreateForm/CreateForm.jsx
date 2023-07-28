import style from './CreateForm.module.css'

export default function Form() {
  return (
    <form className={style.form_container}>
      <label className={style.name_label} >
        Nombre:
        <input type="text" />
      </label>
      <label className={style.height_max}>
        Altura máxima:
        <input type="text" />
      </label>
      <label className={style.height_min}>
        Altura mínima:
        <input type="text" />
      </label>
      <label className={style. weight_max}>
        Peso máximo:
        <input type="text" />
      </label>
      <label className={style.form_min}>
        Peso mínimo:
        <input type="text" />
      </label>
      <label className={style.form_lfs}>
        Años de vida:
        <input type="text" />
      </label>
      <label className={style.form_temperaments}>
        Temperamentos:
        <input type="text" />
      </label>
      <label className={style. image_container}>
        Imagen:
        <input type="text" />
      </label >
      <button className={style.btn_container} type="submit">Enviar</button>
    </form>
  );
}