import { GET_ALL_DOGS,POST_DOG, FIND_DOG_BY_ID, FIND_DOGS, GET_ALL_TEMPERAMENTS, SET_PAGE } from "../redux/typeActions"
// 

const initialState = {
  allDogs: [],
  allTemperaments: [],
  pagination: {
    thisPage: 1,
    totalPage: 0,
    totalItems: 0,
    itemsPerPage: 8,
    currentPageItems: []
  }
  
  
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_DOGS:
      return {
        ...state,
        allDogs: payload,
      };
    case FIND_DOGS:
      return {
        ...state,
        allDogs: payload,

      };
    case GET_ALL_TEMPERAMENTS:
      return {
        ...state,
        allTemperaments: payload,
        
      };
      case FIND_DOG_BY_ID:
        return {
        ...state,
       allDogs: payload, // Asignamos el perro encontrado por ID a findedDogs
      };
      case POST_DOG:
        return{
          ...state,
        allDogs: payload,
        }
        case SET_PAGE:
          return {
            ...state,
            pagination: { ...state.pagination, thisPage: payload },
          };
          
    default:
      return state;
  }

};

export default reducer;

        

































































// import { GET_ALL_DOGS,POST_DOG, FIND_DOG_BY_ID, FIND_DOGS, GET_ALL_TEMPERAMENTS,SET_FILTER_BY_TEMPERAMENT, SET_FILTER_BY_SOURCE, SET_ORDER } from "../Redux/typeActions"
// // 

// const initialState = {
//   allDogs: [],
//   findedDogs: {},
//   tempHelper: [],
//   sourceHelper: [],
//   nameHelper: [],
//   weightHelper: [],
//   allTemperaments: [],
//   filtertemp: " ",
//   change: true,
// };

// const reducer = (state = initialState, { type, payload }) => {
//   // Declaraciones de constantes aqui­, fuera del switch
//   // let filteredTemps;
//   // let filteredSource;
//   // let orderedDogs;
//   // let orderedWeight;
//   // let algo; 

//   switch (type) {
//     case GET_ALL_DOGS:
//       return {
//         ...state,
//         allDogs: payload,
//       };
//     case FIND_DOGS:
//       return {
//         ...state,
//         findedDogs: payload,
//         tempHelper: payload,
//         sourceHelper: payload,
//         nameHelper: payload,
//         weightHelper: payload,
//         change: !state.change,
//       };
//     case GET_ALL_TEMPERAMENTS:
//       return {
//         ...state,
//         allTemperaments: payload,
        
//       };
//       case FIND_DOG_BY_ID:
//         return {
//         ...state,
//        allDogs: payload, // Asignamos el perro encontrado por ID a findedDogs
//       };
//       case POST_DOG:
//         return{
//           ...state,
//         allDogs: payload,
//         }
//         case SET_FILTER_BY_TEMPERAMENT:
//           return{
//             ...state,
//             filtertemp: payload,
//           }
//           case SET_FILTER_BY_SOURCE:
//             return {
//               ...state,
//               filtersource: payload,
//             }
//             case SET_ORDER: 
//             return {
//               ...state,
//               filtername: payload,
//             }
          
//     default:
//       return state;
//   }

// };

// export default reducer;

       
        
        //   filteredSource = state.sourceHelper.filter(
        //     (source) => source.created.toString() === payload.toString()
        //   );
        //   
        
      // case ORDER_BY_WEIGHT:
        //   if (payload === "ASCENDENT") {
        //     orderedWeight = state.weightHelper.slice().sort((a, b) => {
        //       const weightA = parseInt(a.weight.split(" ")[0]);
        //       const weightB = parseInt(b.weight.split(" ")[0]);
        //       return weightA - weightB;
        //     });
        //   } else {
        //     orderedWeight = state.weightHelper.slice().sort((a, b) => {
        //       const weightA = parseInt(a.weight.split(" ")[0]);
        //       const weightB = parseInt(b.weight.split(" ")[0]);
        //       return weightB - weightA;
        //     });
        //   }
        //   