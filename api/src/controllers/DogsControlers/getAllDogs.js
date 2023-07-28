const axios = require('axios');
const filterData = require('../../utils/FormatDog');
const { Dog, Temperaments } = require('../../db');



// Definición de una función asíncrona llamada getAllDogs
const getAllDogs = async () => {
    // Realiza una solicitud HTTP GET a la API "https://api.thedogapi.com/v1/breeds" utilizando axios y espera la respuesta.
    const API = await axios.get("https://api.thedogapi.com/v1/breeds");
    // Extrae los datos de la respuesta de la API.
    const dogData = API.data;
    // Crea una nueva matriz mapeando cada objeto en dogData y agregando una propiedad "isFromApi" con valor "true".
    const allDogFromApi = dogData.map((data) => ({
        ...data,
        isFromApi: true,
    }));
    // Crea otra matriz mapeando cada perro en allDogFromApi y llama a la función "filterData" para procesar los datos.
    const fromApiFormate = allDogFromApi.map((dog) => {
        return filterData(dog);
    });
    // Realiza una consulta a la base de datos para obtener todos los registros de la tabla "Dog".
    // Incluye los registros relacionados de la tabla "Temperaments" con la columna "name" y omite las demás columnas de la tabla intermedia.
    const DogDB = await Dog.findAll({
        include: {
            model: Temperaments,
            attributes: ['name'],
            through: {
                attributes: [],
            },
        },
    });
    // Combina las matrices "fromApiFormate" y "DogDB" en una sola matriz llamada "joinAllDogs".
    const joinAllDogs = [...fromApiFormate, ...DogDB];
    // Devuelve la matriz resultante que contiene tanto los perros de la API como los registros de la base de datos.
    return joinAllDogs;
};


module.exports = {
    getAllDogs,
};