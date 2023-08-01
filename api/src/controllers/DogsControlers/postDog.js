const { Dog, Temperaments } = require("../../db"); // Importa los modelos Dog y Temperaments de la base de datos

const postDog = async (name, imageUrl, temperaments, max_height, min_height, min_weight, max_weight, life_span) => {
  // Crea un rango de altura y peso a partir de los valores mínimos y máximos proporcionados
  const height = `${min_height} - ${max_height}`;
  const weight = `${min_weight} - ${max_weight}`;

  let arrDB = [];
  // Para cada temperamento proporcionado, busca el temperamento en la base de datos y almacena el resultado en arrDB
  for (const temp of temperaments) {
    const sergio = await Temperaments.findOne({ where: { name: temp } });
    arrDB.push(sergio);
  }

  // Crea un nuevo registro de raza de perro en la base de datos con los datos proporcionados
  const newDog = await Dog.create({
    name: name,
    height: height,
    weight: weight,
    life_span: life_span,
    image: imageUrl,
  });

  // Asocia los temperamentos encontrados (almacenados en arrDB) con el nuevo registro de raza de perro
  newDog.addTemperaments(arrDB);

  return newDog; // Devuelve el nuevo registro de raza de perro creado
};

module.exports = {
  postDog,
};
