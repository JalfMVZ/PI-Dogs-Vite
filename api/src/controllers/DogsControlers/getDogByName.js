const axios = require('axios');
const filterData = require('../../utils/FormatDog');
const { Dog, Temperaments } = require('../../db');
const {Op} = require('sequelize')

const getDogByName = async (name) => {
    // Hacer la búsqueda en la API
    const API = await axios.get("https://api.thedogapi.com/v1/breeds");
    const dogData = API.data;
    
    
    let foundDogs = dogData.filter((dog) =>
        dog.name.toLowerCase().includes(name.toLowerCase())
    );
    foundDogs = foundDogs.map((dog) => filterData(dog));
    


    // Hacer la búsqueda en la base de datos
    const dbDogsRauw = await Dog.findAll({
        where: {
            name: { [Op.iLike]: `%${name}%` } // Buscar independientemente de mayúsculas o minúsculas
        },
        include: [{
            model: Temperaments,
            attributes: ['name'],
            through: {
                attributes: [],
            }
        }]
    });

   

    // Combinar resultados de la API y la base de datos
    const allDogs = [...foundDogs, ...dbDogsRauw];

    if (allDogs.length === 0) {
        throw new Error("No se encontraron razas de perros con ese nombre.");
    }

    // Formatear los datos y devolverlos
   
    return allDogs;
};

module.exports = {
    getDogByName,
};