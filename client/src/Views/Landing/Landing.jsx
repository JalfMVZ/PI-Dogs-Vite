import { Link } from "react-router-dom";
import style from "./Landing.module.css";

const LandingPage = () => {
  return (
    <div className={style.container}>
      {/* <div className={Style.botonDiv}> */}
        <Link to="/home">
          <button className={style.btn}>Comenzar</button>
        </Link>
      {/* </div> */}
    </div>
  );
};

export default LandingPage;