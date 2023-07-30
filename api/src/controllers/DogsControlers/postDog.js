const { Dog, Temperaments } = require("../../db");

const postDog = async (name, imageUrl, temperaments, max_height, min_height, min_weight, max_weight, life_span) => {
  const height = `${min_height} - ${max_height}`;
  const weight = `${min_weight} - ${max_weight}`;
  let arrDB = []
  for (const temp of temperaments) {
    const sergio = await Temperaments.findOne({where:{name:temp}})
    arrDB.push( sergio)

  }
const newDog = await Dog.create({
    name: name,
    height: height,
    weight: weight,
    life_span: life_span,
    image: imageUrl,
  });

  newDog.addTemperaments(arrDB)
  return newDog;
};

module.exports = {
  postDog, 
};


// const { Dog } = require("../../db");

// const postDog = async (name, imageUrl, temperaments, height, weight, life_span) => {
//   const newDog = await Dog.create({
//     name: name,
//     image: imageUrl,
//     height: height,
//     weight: weight,
//     life_span: life_span,
//   });
//   let puto = []
//   for (let i = 0; i < temperaments.length; i++) {
//       puto.push(temperaments[i].name)
    
//   }
//   let concha = puto.join(", ")

//   newDog.addTemperaments(concha )
//   return newDog;
// };

// module.exports = {
//   postDog, 
// };
