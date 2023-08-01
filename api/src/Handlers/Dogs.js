const { getAllDogs } = require("../controllers/DogsControlers/getAllDogs");
const { getDogById } = require("../controllers/DogsControlers/getDogByID");
const { getDogByName } = require("../controllers/DogsControlers/getDogByName");
const { postDog } = require("../controllers/DogsControlers/postDog");
const { filterDog } = require("../controllers/DogsControlers/filtersDog");

// Controlador para manejar la solicitud para obtener la lista de perros
const getDogsHandler = async (req, res) => {
  const { name, temp } = req.query; // Obtiene los parámetros 'name' y 'temp' de la consulta

  try {
    if (name) {
      // Si se proporciona el parámetro 'name', busca perros cuyo nombre coincida (ignorando mayúsculas o minúsculas)
      const dogs = await getDogByName(name);
      return res.status(200).json(dogs);
    }

    let dogs = await getAllDogs(); // Obtiene todos los perros

    if (temp) {
      // Si se proporciona el parámetro 'temp', filtra los perros por los temperamentos especificados
      dogs = await filterDog(temp, dogs);
    }

    return res.status(200).json(dogs); // Devuelve la lista de perros en la respuesta
  } catch (error) {
    res.status(404).json({ error: "No hay perros" }); // Devuelve un error 404 si hay un problema al obtener los perros
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
  const { name, image, temperament, max_height, min_height, min_weight, max_weight, life_span } = req.body; // Obtiene los datos del cuerpo de la solicitud

  try {
    // Verifica si todos los datos necesarios se proporcionan en el cuerpo de la solicitud
    if (!name || !image || !temperament || !max_height || !min_height || !min_weight || !max_weight || !life_span) {
      throw new Error("missing data"); // Lanza un error si falta alguno de los datos requeridos
    }

    // Crea un nuevo registro de raza de perro con los datos proporcionados
    const newDog = await postDog(name, image, temperament, max_height, min_height, min_weight, max_weight, life_span);
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
