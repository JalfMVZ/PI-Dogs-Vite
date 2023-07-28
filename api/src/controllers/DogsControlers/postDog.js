const { Dog } = require("../../db");

const postDog = async (name, imageUrl, temperaments, height, weight, life_span) => {
  const newDog = await Dog.create({
    name: name,
    image: imageUrl,
    height: height,
    weight: weight,
    life_span: life_span,
  });

  newDog.addTemperaments(temperaments)
  return newDog;
};

module.exports = {
  postDog, 
};
