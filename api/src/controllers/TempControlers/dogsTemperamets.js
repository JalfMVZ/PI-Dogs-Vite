const { Temperaments } = require("../../db");
const { eliminarRepeticionesEnObjeto } = require("../../utils/FilterRep");
const axios = require("axios");

const getTemperaments = async () => {
  
  const response = await axios(`https://api.thedogapi.com/v1/breeds`);
 
  const dogs = response.data;
 
  const temperaments = dogs.map((dog) => dog.temperament);
  temperaments.forEach((element) => {
    if (element) {
      element.split(",");
      //temperamentArray.forEach((temperament) => {
      // Temperaments.findOrCreate({
      //   where: {
      //     Nombre: temperament.trim(),
      //   },
      // });
      //});
    }
  });

  const temps = eliminarRepeticionesEnObjeto(temperaments).match(/\b\w+\b/g);
  console.log(typeof temps);
  for (const temp of temps) {
    await Temperaments.create({ name: temp });
  }
  console.log(temps);
  const allTemperaments = await Temperaments.findAll();
  return allTemperaments;
};

module.exports = { getTemperaments };
