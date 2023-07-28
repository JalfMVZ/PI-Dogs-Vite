const filterData = (dog) => {
  const dogFormat = {
    id: dog.id,
    name: dog.name,
    image: dog.image.url,
    Temperaments: dog.temperament,
    height: dog.height.metric,
    weight: dog.weight.metric,
    life_span: dog.life_span,
  };
  return dogFormat;
};


// const filterData = (dog) => {
//   if (dog.isFromApi) {
//     const dogFormat = {
//       id: dog.id,
//       name: dog.name,
//       image: dog.image.url,
//       height: dog.height,
//       weight: dog.weight.metric,
//       life_span: dog.life_span.metric,
//     };
//     return dogFormat;
//   } else {
//     const dogFormatDB = {
//       id: dog.id,
//       name: dog.name,
//       image: dog.image,
//       height: dog.height,
//       weight: dog.weight,
//       life_span: dog.life_span,
//       isFromApi: false,
//     };
//     return dogFormatDB;
//   }
// };



module.exports = filterData;
