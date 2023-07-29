const { Temperaments } = require("../../db");
const { eliminarRepeticionesEnObjeto } = require("../../utils/FilterRep");
const axios = require("axios");

const getTemperaments = async () => {
  
  const response = await axios(`https://api.thedogapi.com/v1/breeds`);
 
  const dogs = response.data;
 
  const temperaments = dogs.map((dog) => dog.temperament);
  // console.log('temperamets', temperaments)
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
 
  // console.log(typeof temps);
  for (const temp of temps) {
    await Temperaments.create({ name: temp });
  }

  const allTemperaments = await Temperaments.findAll();
  console.log('allTemperaments', allTemperaments)
  return allTemperaments;
};

module.exports = { getTemperaments };
