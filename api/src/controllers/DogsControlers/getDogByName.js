const axios = require('axios');
const filterData = require('../../utils/FormatDog');
const { Dog, Temperaments } = require('../../db');
const { Op } = require('sequelize');

const getDogByName = async (name) => {
  const API = await axios.get('https://api.thedogapi.com/v1/breeds');
  const dogData = API.data;

  let foundDogs = dogData.filter((dog) =>
    dog.name.toLowerCase().includes(name.toLowerCase())
  );

  foundDogs = foundDogs.map((dog) => filterData(dog));

  const dbDogsRauw = await Dog.findAll({
    where: {
      name: { [Op.iLike]: `%${name}%` },
    },
    include: [
      {
        model: Temperaments,
        attributes: ['name'],
        through: {
          attributes: [],
        },
      },
    ],
  });

  const formattedDbDogs = dbDogsRauw.map((dog) => {
    const temperaments = dog.Temperaments.map((t) => t.name).join(', ');

    return {
      ...dog.dataValues,

      Temperaments: temperaments,
    };
  });

  const allDogs = [...foundDogs, ...formattedDbDogs];

  if (allDogs.length === 0) {
    throw new Error('No se encontraron razas de perros con ese nombre.');
  }

  return allDogs;
};

module.exports = { getDogByName };
