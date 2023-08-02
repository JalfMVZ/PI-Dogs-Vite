const { getAllDogs } = require("../controllers/DogsControlers/getAllDogs");
const { getDogById } = require("../controllers/DogsControlers/getDogByID");
const { getDogByName } = require("../controllers/DogsControlers/getDogByName");
const { postDog } = require("../controllers/DogsControlers/postDog");
const { filterDog } = require("../controllers/DogsControlers/filtersDog");

// Controlador para manejar la solicitud para obtener la lista de perros
const getDogsHandler = async (req, res) => {
  const { name } = req.query;
  try {
    const allDogs = name ? await getDogByName(name) : await getAllDogs();
    res.status(200).send(allDogs);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Controlador para manejar la solicitud para obtener información sobre un perro específico según su ID
const getIdDog = async (req, res) => {
  const { id } = req.params; // Obtiene el parámetro 'id' de los parámetros de la solicitud

  try {
    const dog = await getDogById(id); // Busca información sobre el perro cuyo ID coincide con el proporcionado
    return res.json(dog); // Devuelve la información del perro en la respuesta
  } catch (error) {
    res.status(404).json({ error: 'id no encontrado' }); // Devuelve un error 404 si el ID del perro no se encuentra
  }
};

// Controlador para manejar la solicitud para crear un nuevo registro de raza de perro en la base de datos
const postDogsHandler = async (req, res) => {
  ; // Obtiene los datos del cuerpo de la solicitud

  try {
    // Verifica si todos los datos necesarios se proporcionan en el cuerpo de la solicitud

    // Crea un nuevo registro de raza de perro con los datos proporcionados
    const newDog = await postDog(req.body);
    res.status(200).json(newDog); // Devuelve el nuevo registro de perro creado en la respuesta
  } catch (error) {
    res.status(404).json({ error: error.message }); // Devuelve un error 404 si hay algún problema al crear el nuevo perro
  }
};

module.exports = {
  getDogsHandler,
  getIdDog,
  postDogsHandler,
};
