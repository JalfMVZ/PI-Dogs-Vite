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
        if (dogFormat !== undefined ) {
            return dogFormat
            
        } else {
            throw new Error ("oh si")
        }
};

    const dbDogsRauw = await Dog.findAll({
        
        where: {
            id: id, // Buscar independientemente de mayúsculas o minúsculas
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
        const algo = dbDogsRauw[0]
        const algo2 = algo.Temperaments.map((dog) => dog.name).join(", ")
        algo.dataValues.Temperaments = algo2
        return algo
     
        
    } else {
        throw new Error ("oh no")
    }
}

module.exports = {
    getDogById,
    
};




