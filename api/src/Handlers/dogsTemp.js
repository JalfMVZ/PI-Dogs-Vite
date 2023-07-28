const {getTemperaments} = require("../controllers/TempControlers/dogsTemperamets");
  
  const getTemperamentsHandler = async (req, res) => {
    try {
      console.log("aaa");
      const temperaments = getTemperaments();
      res.status(200).json(temperaments);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = getTemperamentsHandler;