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
