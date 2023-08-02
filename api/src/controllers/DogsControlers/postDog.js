const { Dog } = require("../../db");

const postDog = async ({
  name,
  image,
  temperaments,
  max_height,
  min_height,
  max_weight,
  min_weight,
  life_span,
}) => {
  const found = await Dog.findOne({ where: { name } });

  if (found) throw new Error("This breed already exists");

  const newDog = await Dog.create({
    name,
    max_height,
    min_height,
    max_weight,
    min_weight,
    life_span,
    image,
    temperaments,
  });
  await newDog.addTemperaments(temperaments);
  return newDog;
};
module.exports = { postDog };

