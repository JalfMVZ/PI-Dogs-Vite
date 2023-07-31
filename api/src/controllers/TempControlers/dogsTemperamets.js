// Importar el modelo Temperaments desde el módulo "db"
const { Temperaments } = require("../../db");

// Importar la biblioteca Axios para realizar solicitudes HTTP
const axios = require("axios");

// Definir una función asincrónica llamada getTemperaments 
const getTemperaments = async () => {

  // Realizar una solicitud HTTP GET a la API de perros y guardar la respuesta en 'response'
  const response = await axios(`https://api.thedogapi.com/v1/breeds`);

  // Extraer el contenido de la respuesta (que probablemente es un array de objetos) y guardarlo en 'dogs'
  const dogs = response.data;

  // Crear un nuevo array 'temperaments' que contiene los temperamentos de cada perro,
  // utilizando el método 'map' y filtrando los valores 'undefined' o 'null'
  const temperaments = dogs.map((dog) => dog.temperament).filter(Boolean);

  // Aplanar el array de temperamentos para obtener un solo array de cadenas
  // separando los temperamentos que estén unidos por comas (ejemplo: "playful, friendly")
  const flattenedTemperaments = temperaments.flatMap((temperament) => temperament.split(', '));

  // Iniciar un bucle 'for...of' que recorre cada temperamento en el array 'flattenedTemperaments'
  for (const temperament of flattenedTemperaments) {
    // Utilizar el modelo 'Temperaments' para buscar o crear un registro en la base de datos
    // con el nombre del temperamento actual
    await Temperaments.findOrCreate({
      where: {
        name: temperament,
      },
    });
  }

  // Después de completar el bucle, realizar otra búsqueda en la base de datos para obtener todos los temperamentos almacenados
  const allTemperaments = await Temperaments.findAll();

  // Devolver la lista de todos los temperamentos almacenados en la base de datos
  return allTemperaments;
};

// Exportar la función 'getTemperaments' para que pueda ser utilizada desde otros archivos
module.exports = { getTemperaments };
