import style from "./Cards.module.css";
import Card from "../Card/Card";
import { useSelector } from "react-redux";

const Cards = () => {
  const dogs = useSelector((state) => state.allDogs);
  
  return (
    <div className={style.cardList}>
      {dogs.map((dog) => {
        // Verificar si dog.temperaments es un array antes de usar join()

        return (
          <Card
            key={dog.id}
            id={dog.id}
            name={dog.name}
            image={dog.image}
            weight = {dog.weight}
            height = {dog.height}
            temperaments={
              Array.isArray(dog.Temperaments)
                ? dog.Temperaments.map((temp) => {
                    return temp.name;
                  })
                : dog.Temperaments
            }
          />
        );
      })}
    </div>
  );
};

export default Cards;
