const axios = require('axios'); // Importa la biblioteca axios para realizar solicitudes HTTP
const filterData = require('../../utils/FormatDog'); // Importa una función de formato de datos para perros desde un archivo específico
const { Dog, Temperaments } = require('../../db'); // Importa los modelos Dog y Temperaments de la base de datos

const getAllDogs = async () => {
  // Hace una solicitud a la API para obtener información sobre razas de perros
  const API = await axios.get("https://api.thedogapi.com/v1/breeds");
  const dogData = API.data; // Almacena los datos de las razas de perros en dogData

  // Formatea los datos recibidos de la API y agrega la propiedad isFromApi con valor true
  const allDogFromApi = dogData.map((data) => ({
    ...data,
    isFromApi: true,
  }));

  // Aplica la función de formato (filterData) a cada objeto de raza de perro recibido de la API
  const fromApiFormate = allDogFromApi.map((dog) => {
    return filterData(dog);
  });

  // Realiza una búsqueda en la base de datos para obtener todos los perros y sus temperamentos asociados
  const DogDB = await Dog.findAll({
    include: {
      model: Temperaments, // Incluye el modelo de Temperaments
      attributes: ['name'], // Especifica que solo se necesitan los nombres de los temperamentos
      through: {
        attributes: [], // A través de una relación many-to-many, no se necesitan atributos adicionales de la tabla de asociación
      },
    },
  });

  // Combina los datos formateados de la API con los datos de la base de datos
  const joinAllDogs = [...fromApiFormate, ...DogDB.map(dog => {
    const temperaments = dog.Temperaments.map(t => t.name).join(', '); // Obtiene los nombres de los temperamentos asociados al perro y los une en una cadena
    const [minHeight, maxHeight] = dog.height.split(' - ');
    // Separar el campo weight en min y max
    const [minWeight, maxWeight] = dog.weight.split(' - ');

    return {
      ...dog.dataValues,

      min_height: parseInt(minHeight), // Usar la propiedad min del objeto height
      max_height: parseInt(maxHeight), // Usar la propiedad max del objeto height
      min_weight: parseInt(minWeight), // Usar la propiedad min del objeto weight
      max_weight: parseInt(maxWeight), // Usar la propiedad max del objeto weight
      Temperaments: temperaments, // Agrega la cadena de nombres de temperamentos al objeto del perro
    };

  })];

  return joinAllDogs; // Devuelve la lista combinada de perros con sus temperamentos
};

module.exports = {
  getAllDogs,
};
