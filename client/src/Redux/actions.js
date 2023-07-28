import { GET_ALL_DOGS, FIND_DOG_BY_ID, FIND_DOGS, GET_ALL_TEMPERAMENTS, FILTER_BY_TEMPERAMENT, FILTER_BY_SOURCE, ORDER_BY_NAME, ORDER_BY_WEIGHT, ERROR} from "./typeActions";
import axios from "axios"

export const getAllDogs = () => {
    return async(dispatch) => {
        try {
            const response = await axios.get("http://localhost:3001/dogs")
                return dispatch({type: GET_ALL_DOGS, payload: response.data})
        } catch (error) {
            return dispatch({type : ERROR, payload : error})
        }
    }
}

export const findDogById = (id) => {
    return async (dispatch) => {
      try {
        const response = await axios.get(`http://localhost:3001/dogs/${id}`);
        if (response.data.id) {
          return dispatch({ type: FIND_DOG_BY_ID, payload: response.data });
        } else {
          window.alert("Can't find the detail of that dog");
        }
      } catch (error) {
        console.error(error);
        return dispatch({ type: ERROR, payload: error });
      }
    };
  };



export const findedDogs = (name) => {
    return async(dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3001/dogs?name=${name}`);
            if(typeof response.data === "object") {
                return dispatch({type : FIND_DOGS, payload : response.data})
            } else {
                return dispatch({type : FIND_DOGS, payload : []})
            }
        } catch (error) {
            return dispatch({type : ERROR, payload : error})
        }
        
    }
}

export const getAllTemperaments = () => {
    console.log('vamo a ver');
    
    return async(dispatch) => {
        try {
            const response = await axios.get("http://localhost:3001/temperaments")
            console.log('resTemp', response.data);
            
            return dispatch({type : GET_ALL_TEMPERAMENTS, payload : response.data})
        } catch (error) {
            return dispatch({type : ERROR, payload : error})
        }
    }
}

export const filterByTemperament = (option) => {
    
    return {type: FILTER_BY_TEMPERAMENT, payload: option}
}

export const filterBySource = (option) => {
    return {type: FILTER_BY_SOURCE, payload: option}
}

export const orderByName = (option) => {
   
    
    return {type: ORDER_BY_NAME, payload: option}
}

export const orderByWeight = (option) => {
    console.log('action', option);
    
    return {type: ORDER_BY_WEIGHT, payload: option}
}