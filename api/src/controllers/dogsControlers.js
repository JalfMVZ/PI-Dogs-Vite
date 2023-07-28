const axios = require('axios');
const { dogData } = require('./DogsControlers/getAllDogs')
const filterData = require('../utils/FormatDog');
const { Dog, Temperaments } = require('../db');

// const getDogById = async (id) => {
//   try {
//       const petiApi = await axios.get();
//       let dogFromApi = petiApi.data;

//       return formatDog(dogFromApi);
//   } catch {
//       const dogFromDB = await Dog.findOne({
//           where: { id: id },
//           include: [
//               {
//                   model: Temperaments,
//                   attributes: ['name'],
//                   through: {
//                       attributes: [],
//                   },
//               },
//           ],
//       });

//       return formatDog(dogFromDB);
//   }
// };



// const getDogById = async (id) => {
//   // "https://api.thedogapi.com/v1/breeds"
//   if (id.length < 4) {
//     const API = await axios.get("https://api.thedogapi.com/v1/breeds");
//     // Extrae los datos de la respuesta de la API.
//     const dogData = API.data;


//     const foundDog = dogData.find((dog) => dog.id == id);
//     console.log('foundDog', foundDog)
//     const dogFormat = filterData(foundDog);
//     return dogFormat;

//   };
// }


// };

//   const filteredDogData = dogData.filter((dog) => dog.id == id);
//   if (filteredDogData.length > 0) {
//     const dog = filteredDogData[0];
//     return dogFormat;
//   } else {
//     throw new Error("Dog not found");
//   }
// } else {
//   const dogFormat = dogData.map((dog) => filterData(dog));



// const getDogById = async (id) => {
//   try {
//     const petiApi = await axios.get(`http://localhost:3001/dogs/${id}`);
//     let dogFromApi = petiApi.data;

//       return formatDog(dogFromApi);
//   } catch {
//       const dogFromDB = await Dog.findOne({
//           where: { id: id },
//           include: [
//               {
//                   model: Temp,
//                   attributes: ['name'],
//                   through: {
//                       attributes: [],
//                   },
//               },
//           ],
//       });

//       return formatDog(dogFromDB);
//   }
// };






module.exports = {
  
};


// const getAllDogs = async () => {
//   if (id) {
//     const filteredDogData = dogData.filter((dog) => dog.id == id);

//     if (filteredDogData.length > 0) {
//       const dog = filteredDogData[0];
//       const dogFormat = filterData(dog);
//       return dogFormat;
//     } else {
//       throw new Error("Dog not found");
//     }
//   } else {
//     const dogFormat = dogData.map((dog) => filterData(dog));
//     return dogFormat;
//   }
// } 





