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
    include: [{
      model: Temperaments,
      attributes: ['name'],
      through: {
        attributes: [],
      }
    }]
  });

  if (dbDogsRauw !== undefined) {
    const dog = dbDogsRauw[0];

    // Separar el campo height en min y max
    const [minHeight, maxHeight] = dog.height.split(' - ');

    // Separar el campo weight en min y max
    const [minWeight, maxWeight] = dog.weight.split(' - ');

    // Aquí, puedes incluir la lógica para formatear los temperamentos como se hizo anteriormente
    const temperaments = dog.Temperaments.map((dog) => dog.name).join(", ");

    return {
      ...dog.dataValues,
      min_height: parseInt(minHeight),
      max_height: parseInt(maxHeight),
      min_weight: parseInt(minWeight),
      max_weight: parseInt(maxWeight),
      Temperaments: temperaments,
    };
  } else {
    throw new Error("oh no");
  }
};

module.exports = {
  getDogById,
};
