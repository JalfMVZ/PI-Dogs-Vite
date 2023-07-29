const axios = require('axios');
const filterData = require('../../utils/FormatDog');
const { Dog, Temperaments } = require('../../db');

const getAllDogs = async () => {
  const API = await axios.get("https://api.thedogapi.com/v1/breeds");
  const dogData = API.data;
  const allDogFromApi = dogData.map((data) => ({
    ...data,
    isFromApi: true,
  }));
  const fromApiFormate = allDogFromApi.map((dog) => {
    return filterData(dog);
  });

  const DogDB = await Dog.findAll({
    include: {
      model: Temperaments,
      attributes: ['name'],
      through: {
        attributes: [],
      },
    },
  });

  const joinAllDogs = [...fromApiFormate, ...DogDB.map(dog => {
    const temperaments = dog.Temperaments.map(t => t.name).join(', ');
    return {
      ...dog.dataValues,
      Temperaments: temperaments
    };
  })];

  return joinAllDogs;
};

module.exports = {
  getAllDogs,
};
