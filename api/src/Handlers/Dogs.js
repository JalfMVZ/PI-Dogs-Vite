const { getAllDogs } = require("../controllers/DogsControlers/getAllDogs")
const { getDogById } = require("../controllers/DogsControlers/getDogByID")
const { getDogByName } = require("../controllers/DogsControlers/getDogByName");
const { postDog } = require("../controllers/DogsControlers/postDog");


const getDogsHandler = async (req, res) => {
  const { name } = req.query;
  try {
    const allDogs = name ? await getDogByName(name) : await getAllDogs();
    return res.status(200).json(allDogs);
  } catch (error) {
    res.status(404).json({ error: "No hay perros" });
  }
};

const getIdDog = async (req, res) => {
  const { id } = req.params;
  try {

    const dog = await getDogById(id);

    return res.json(dog);


  } catch (error) {
    res.status(404).json({ error: 'id no encontrado' });
  }
};

const postDogsHandler = async (req, res) => {
  const { name, image, temperament, max_height, min_height, min_weight, max_weight, life_span } = req.body;
  // console.log('req.body', req.body); // Verifica que los datos lleguen correctamente

  try {
    if (!name || !image || !temperament || !max_height || !min_height || !min_weight || !max_weight || !life_span) {
      throw new Error("missing data");
    }

    const newDog = await postDog(name, image, temperament, max_height, min_height, min_weight, max_weight, life_span);
    res.status(200).json(newDog);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};


// const getDogByNameHandler = async (req, res) => {
//   const { name } = req.query;
//   try {
//     const dogs = await getDogByName(name);

//     if (typeof dogs === "string") {
//       // Si la función devuelve un mensaje de error, no se encontraron coincidencias.
//       return res.status(404).json({ message: dogs });
//     }

//     return res.status(200).json(dogs);
//   } catch (error) {
//     res.status(500).json({ error: 'Error en el servidor' });
//   }
// };

module.exports = {
  getDogsHandler,
  getIdDog,
  postDogsHandler,

};

// const getDogsHandler = async (req, res) => {
//     // console.log('id',id);
//     try {
//         // const { id } = req.query;
//         // if (id) {
//         //     const dog = await getAllDogs(id); // Llama a getAllDogs como una función
//         //     res.status(200).json(dog);

//         // } else {
//             const allDogs = await getAllDogs();
//             return res.status(200).json(allDogs)
//         // }
//     } catch (error) {
//         res.status(404).json({ error: "No hay perros" });
//     }
// };


// const dogFil = async (req, res) => {
//     try {


//     } catch (error) {
//         res.status(500).json({ error: 'Error en el servidor' });
//     }
// };

