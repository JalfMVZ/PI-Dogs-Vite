// import axios from "axios";
// import {
//     SET_FILTER_BY_TEMPERAMENT, SET_FILTER_BY_SOURCE, SET_ORDER, COMBINED_FILTERS
// } from "../typeActions.js";

// export const setfilterByTemperament = (option) => {
//     return { type: SET_FILTER_BY_TEMPERAMENT, payload: option }
// }
// export const setfilterBySource = (option) => {
//     console.log('option', option)
//     return { type: SET_FILTER_BY_SOURCE, payload: option }
// }
// export const setOrder = (option) => {
//     return { type: SET_ORDER, payload: option }
// }

// export const combinedFilters = (order, source, temperaments) => {
//     const endpoint = "http://localhost:3001/dogs";

//     return async (dispatch) => {
//         try {
//             const { data } = await axios.get(endpoint);
//             let filterDogs = data;
//             if (order && !source && !temperaments) {
//                 // Filtrar y ordenar si se proporciona solo el parámetro 'order'
//                 if (order === "ASCENDENT") filterDogs.slice().sort((a, b) => a.name.localeCompare(b.name));
//                 else if (order === "DESCENDENT") filterDogs.slice().sort((a, b) => b.name.localeCompare(a.name));

//                 // else if (order === "MAX_WEIGHT") {
//                 //     filterDogs.sort((a, b) => a.weight - b.weight);
//                 // } else if (order === "MIN_WEIGHT") {
//                 //     filterDogs.sort((a, b) => b.weight - a.weight);
//                 // }
//             } else if (!order && source && !temperaments) {
//                 console.log('source', source)
//                 if (source === "DATABASE") {
//                     filterDogs.filter((dog) => dog.id.length > 4);
//                     console.log('filterDogs', filterDogs)
//                 } else if (source === "API") {
//                     filterDogs.filter((dog) => dog.id.length <= 3);
//                     console.log('filterDogs', filterDogs)
//                 }
//             }
//             else if (!order && !source && temperaments) filterDogs.filter((temp) => temp.temperament && temp.temperament.includes(temperaments));
//             // Filtrar por actividad si se proporciona solo el parámetro 'temperaments'
//             else if (order && source && !temperaments) {
//                 // Filtrar por orden y sourcee si se proporcionan 'order' y 'source'
//                 if (order === "ASCENDENT") filterDogs.slice().sort((a, b) => a.name.localeCompare(b.name));
//                 else if (order === "DESCENDENT") filterDogs.slice().sort((a, b) => b.name.localeCompare(a.name));
//                 // filtra
//                 if (source === "SOURCE") {
//                     filterDogs.filter((dog) => dog.id.length > 4);
//                 } else if (source === "API") {
//                     filterDogs.filter((dog) => dog.id.length <= 3);
//                 }
//             } else if (order && !source && temperaments) {
//                 // Filtrar por orden y actividad si se proporcionan 'order' y 'temperaments'
//                 if (order === "ASCENDENT") filterDogs.slice().sort((a, b) => a.name.localeCompare(b.name));
//                 else if (order === "DESCENDENT") filterDogs.slice().sort((a, b) => b.name.localeCompare(a.name));
//                 filterDogs.filter((temp) => temp.temperament && temp.temperament.includes(temperaments)
//                 );
//             } else if (!order && source && temperaments) {
//                 // Filtrar por sourcee y actividad si se proporcionan 'source' y 'temperaments'
//                 if (source === "SOURCE") {
//                     filterDogs.filter((dog) => dog.id.length > 4);
//                 } else if (source === "API") {
//                     filterDogs.filter((dog) => dog.id.length <= 3);
//                 }

//                 filterDogs.filter((temp) => temp.temperament && temp.temperament.includes(temperaments)
//                 );
//             } else if (order && source && temperaments) {
//                 // Filtrar por orden, sourcee y actividad si se proporcionan 'order', 'source' y 'temperaments'
//                 if (order === "ASCENDENT") filterDogs.slice().sort((a, b) => a.name.localeCompare(b.name));
//                 else if (order === "DESCENDENT") filterDogs.slice().sort((a, b) => b.name.localeCompare(a.name));
//                 if (source === "SOURCE") {
//                     filterDogs.filter((dog) => dog.id.length > 4);
//                 } else if (source === "API") {
//                     filterDogs.filter((dog) => dog.id.length <= 3);
//                 }

//                 filterDogs.filter((temp) => temp.temperament && temp.temperament.includes(temperaments)
//                 );
//             }
//             return dispatch({ type: COMBINED_FILTERS, payload: filterDogs });
//         } catch (error) {
//             console.error("Error fetching data:", error);
//             // Aquí puedes despachar una acción para manejar el error si es necesario
//         }
//     };
// };