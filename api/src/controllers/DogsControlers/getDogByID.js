const axios = require('axios');
const filterData = require('../../utils/FormatDog');
const { Dog, Temperaments } = require('../../db');



const getDogById = async (id) => {
    // "https://api.thedogapi.com/v1/breeds"
    if (id.length < 4) {
        const API = await axios.get("https://api.thedogapi.com/v1/breeds");
        // Extrae los datos de la respuesta de la API.
        const dogData = API.data;
        const foundDog = dogData.find((dog) => dog.id == id);
        const dogFormat = filterData(foundDog);
        return dogFormat
};

    const dbDogsRauw = await Dog.findAll({
        where: {
            id: { [Op.iLike]: `%${id}%` } // Buscar independientemente de mayúsculas o minúsculas
        },
        include: [{
            model: Temperaments,
            attributes: ['name'],
            through: {
                attributes: [],
            }
        }]
    });
    const allDogs = [...dogFormat, ...dbDogsRauw];

    return allDogs
}

module.exports = {
    getDogById,
    
};




