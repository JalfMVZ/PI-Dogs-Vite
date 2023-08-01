const axios = require('axios'); // Importa la biblioteca axios para realizar solicitudes HTTP
const filterData = require('../../utils/FormatDog'); // Importa una función de formato de datos para perros desde un archivo específico
const { Dog, Temperaments } = require('../../db'); // Importa los modelos Dog y Temperaments de la base de datos
const { Op } = require('sequelize'); // Importa el operador 'Op' de Sequelize para realizar operaciones de consulta

const getDogByName = async (name) => {
  // Hacer una búsqueda en la API para obtener información sobre todas las razas de perros
  const API = await axios.get("https://api.thedogapi.com/v1/breeds");
  const dogData = API.data; // Almacena los datos de las razas de perros en dogData

  // Filtrar las razas de perros cuyo nombre incluye la cadena proporcionada (insensible a mayúsculas o minúsculas)
  let foundDogs = dogData.filter((dog) =>
    dog.name.toLowerCase().includes(name.toLowerCase())
  );

  // Aplicar la función de formato (filterData) a cada raza de perro encontrada en la API
  foundDogs = foundDogs.map((dog) => filterData(dog));

  // Hacer una búsqueda en la base de datos para obtener todas las razas de perros que coincidan con el nombre proporcionado
  const dbDogsRauw = await Dog.findAll({
    where: {
      name: { [Op.iLike]: `%${name}%` } // Buscar independientemente de mayúsculas o minúsculas
    },
    include: [{
      model: Temperaments,
      attributes: ['name'], // Especifica que solo se necesitan los nombres de los temperamentos
      through: {
        attributes: [], // A través de una relación many-to-many, no se necesitan atributos adicionales de la tabla de asociación
      }
    }]
  });

  // Formatear los resultados de la base de datos para obtener los temperamentos como un string separado por comas
  const formattedDbDogs = dbDogsRauw.map(dog => {
    // Aquí, puedes incluir la lógica para formatear los temperamentos como se hizo anteriormente
    const temperaments = dog.Temperaments.map((dog) => dog.name).join(", ");

    const [minHeight, maxHeight] = dog.height.split(' - ');

    // Separar el campo weight en min y max
    const [minWeight, maxWeight] = dog.weight.split(' - ');


    return {
      ...dog.dataValues,
      min_height: parseInt(minHeight),
      max_height: parseInt(maxHeight),
      min_weight: parseInt(minWeight),
      max_weight: parseInt(maxWeight),
      Temperaments: temperaments,
    };

  });

  // Combinar los resultados de la API y la base de datos en una sola lista de todas las razas de perros encontradas
  const allDogs = [...foundDogs, ...formattedDbDogs];

  // Si no se encontraron razas de perros con el nombre proporcionado, lanzar un error
  if (allDogs.length === 0) {
    throw new Error("No se encontraron razas de perros con ese nombre.");
  }

  return allDogs; // Devuelve la lista de todas las razas de perros encontradas
};

module.exports = { getDogByName };
