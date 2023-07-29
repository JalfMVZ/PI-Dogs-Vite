import { GET_ALL_DOGS, FIND_DOG_BY_ID, FIND_DOGS, GET_ALL_TEMPERAMENTS, FILTER_BY_TEMPERAMENT, FILTER_BY_SOURCE, ORDER_BY_NAME, ORDER_BY_WEIGHT } from "./typeActions";

const initialState = {
  allDogs: [],
  findedDogs: {},
  tempHelper: [],
  sourceHelper: [],
  nameHelper: [],
  weightHelper: [],
  allTemperaments: [],
  change: true,
};

const reducer = (state = initialState, { type, payload }) => {
  // Declaraciones de constantes aquÃ­, fuera del switch
  let filteredTemps;
  let filteredSource;
  let orderedDogs;
  let orderedWeight;


  switch (type) {
    case GET_ALL_DOGS:
      return {
        ...state,
        allDogs: payload,
        findedDogs: payload,
        sourceHelper: payload
      };
    case FIND_DOGS:
      return {
        ...state,
        findedDogs: payload,
        tempHelper: payload,
        sourceHelper: payload,
        nameHelper: payload,
        weightHelper: payload,
        change: !state.change,
      };
    case GET_ALL_TEMPERAMENTS:
      return {
        ...state,
        allTemperaments: payload,
      };
    case FILTER_BY_TEMPERAMENT:
      filteredTemps = state.tempHelper.filter(
        (temp) => temp.temperament && temp.temperament.includes(payload)
      );
      return {
        ...state,
        findedDogs: filteredTemps,
        sourceHelper: filteredTemps,
        nameHelper: filteredTemps,
        weightHelper: filteredTemps,
        change: !state.change,
      };
    case FILTER_BY_SOURCE:
      const algo = state.allDogs
      if (payload === "SOURCE") {
        algo.filter((dog ) => dog.id.length > 4)
      } else if (payload === "API") {
        algo.filter((dog) => dog.id.length <= 3)
      }
      filteredSource = state.sourceHelper.filter(
        (source) => source.created.toString() === payload.toString()
      );
      return {
        ...state,
      filteredSource 
      };
    case ORDER_BY_NAME:
      if (payload === "ASCENDENT") {
        orderedDogs = state.nameHelper.slice().sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      } else {
        orderedDogs = state.nameHelper.slice().sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }
      return {
        ...state,
        findedDogs: orderedDogs,
        nameHelper: orderedDogs,
        weightHelper: orderedDogs,
        change: !state.change,
      };

    case ORDER_BY_WEIGHT:
      if (payload === "ASCENDENT") {
        orderedWeight = state.weightHelper.slice().sort((a, b) => {
          const weightA = parseInt(a.weight.split(" ")[0]);
          const weightB = parseInt(b.weight.split(" ")[0]);
          return weightA - weightB;
        });
      } else {
        orderedWeight = state.weightHelper.slice().sort((a, b) => {
          const weightA = parseInt(a.weight.split(" ")[0]);
          const weightB = parseInt(b.weight.split(" ")[0]);
          return weightB - weightA;
        });
      }
      return {
        ...state,
        findedDogs: orderedWeight,
        change: !state.change,
      };
    case FIND_DOG_BY_ID:
      return {
        ...state,
        findedDogs: payload, // Asignamos el perro encontrado por ID a findedDogs
      };

    default:
      return state;
  }
};

export default reducer;