import { GET_ALL_DOGS, POST_DOG, FIND_DOG_BY_ID, FIND_DOGS, GET_ALL_TEMPERAMENTS,  SET_PAGE,ERROR} from "../redux/typeActions";
import axios from "axios"

export const getAllDogs = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get("http://localhost:3001/dogs")
            return dispatch({ type: GET_ALL_DOGS, payload: response.data })
        } catch (error) {
            return dispatch({ type: ERROR, payload: error })
        }
    }
}

export const findDogById = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3001/dogs/${id}`);
            if (response.data) {
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
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3001/dogs?name=${name}`);
            if (typeof response.data === "object") {
                return dispatch({ type: FIND_DOGS, payload: response.data })
            } else {
                return dispatch({ type: FIND_DOGS, payload: [] })
            }
        } catch (error) {
            return dispatch({ type: ERROR, payload: error })
        }

    }
}

export const getAllTemperaments = () => {
    console.log('vamo a ver');

    return async (dispatch) => {
        try {
            const response = await axios.get("http://localhost:3001/temperaments")
            

            return dispatch({ type: GET_ALL_TEMPERAMENTS, payload: response.data })
        } catch (error) {
            return dispatch({ type: ERROR, payload: error })
        }
    }
}


export const cleanDetail = () => {
    return { type: "CLEAN_DETAIL" };
};

export const postDog = (props) => {
    return async function (dispatch) {
      try {
        console.log(props.temperament);
        const response = await axios.post("http://localhost:3001/dogs", {
            name: props.name,
            image: props.image,
            temperaments: props.temperament,
            max_height: props.max_height,
            min_height: props.min_height,
            max_weight: props.max_weight,
            min_weight: props.min_weight,
            life_span: props.life_span,
        });
        dispatch({ type: POST_DOG, payload: response.data });
        return response;
      } catch (error) {
        alert(error.response.data.error);
      }
    };
  };



  export const setPage = (page) => ({
    type: SET_PAGE,
    payload: page,
  });


// export const getAllDogsFilters = (temperament, source, name, weight) => {
//     return async () => {
//         const response = await axios.get("http://localhost:3001/dogs")
        

//         if (temperament && !source && !name && !weight) {
//             let filteredTemps = response.data.filter(

//                 (temp) => temp.temperament && temp.temperament.includes(payload)
//             );
//         }
//     }

// }
