const axios = require('axios');
const filterData = require('../../utils/FormatDog');
const { Dog, Temperaments } = require('../../db');

const getDogById = async (id) => {
  if (id.length < 4) {
    const API = await axios.get("https://api.thedogapi.com/v1/breeds");
    const dogData = API.data;
    const foundDog = dogData.find((dog) => dog.id == id);

    if (foundDog !== undefined) {
      const dogFormat = filterData(foundDog);
      return dogFormat;
    } else {
      throw new Error("oh si");
    }
  }

  const dbDogsRauw = await Dog.findAll({
    where: {
      id: id,
    },
    attributes: ['id', 'name', 'image', 'min_height', 'max_height', 'min_weight', 'max_weight', 'life_span'], 
    include: [{
      model: Temperaments,
      attributes: ['name'],
      through: {
        attributes: [],
      }
    }]
  });
  if (dbDogsRauw !== undefined) {
    const dog = dbDogsRauw[0].dataValues; // Aquí obtenemos los valores de los datos
    // Entre ellos deberías tener min_height, max_height...
    const temperaments = dog.Temperaments.map((dog) => dog.name).join(", ");
    return {
      ...dog, 
      Temperaments: temperaments,
    };
  
  } else {
    throw new Error("oh no");
  }
}  

module.exports = {
  getDogById,
};
