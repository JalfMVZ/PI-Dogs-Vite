// const URL = `https://api.thedogapi.com/v1/breeds`;
// const API_KEY = `?api_key=${process.env.API_KEY}`;

// const getObjData = (dogs) => {
//   let temperamentArray;
//   if(typeof dogs.id === "string") {
//       temperamentArray = dogs.Temperaments.map( el => el.name );
//   }
//   if(dogs.reference_image_id) {
//       dogs.image = `https://cdn2.thedogapi.com/images/${dogs.reference_image_id}.jpg`;
//       if(dogs.id === 15 || dogs.id === 125 || dogs.id === 212) dogs.image = `https://cdn2.thedogapi.com/images/${dogs.reference_image_id}.png`;
//   }
//   const dogObj = {
//       id: dogs.id,
//       imagen: dogs.image,
//       name: dogs.name,
//       height: (typeof dogs.id === "number") ? dogs.height.metric: dogs.height,
//       weight: (typeof dogs.id === "number") ? dogs.weight.metric: dogs.weight,
//       yearsLife: (typeof dogs.id === "number") ? dogs.life_span: dogs.yearsLife,
//       temperaments: (typeof dogs.id === "number") ? dogs.temperament?.split(",").map( temperament => temperament.trim()): temperamentArray,
//   }
//   return dogObj;
// }
// module.exports = getObjData;




const filterData = (dog) => {
  const dogFormat = {
    id: dog.id,
    name: dog.name,
    image: dog.image.url,
    Temperaments: dog.temperament,
    min_height: parseInt(dog.height.metric.split("-")[0]),
    max_height: parseInt(dog.height.metric.split("-")[1]),
    min_weight: parseInt(dog.weight.metric.split("-")[0]),
    max_weight: parseInt(dog.weight.metric.split("-")[1]),
    life_span: dog.life_span,
  };
  return dogFormat;
};

module.exports = filterData;




