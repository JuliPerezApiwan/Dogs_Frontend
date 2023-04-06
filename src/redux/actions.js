import { GET_ALL_DOGS, ORDER, ORDER_BYWEIGHT, FILTER_BYTEMPERAMENTS, GET_ALL_TEMPERAMENTS, FILTER_FROM_DOGS, GET_DOGS_NAME, GET_DOG_DETAIL, ADD_DOG, CLEAN_DETAIL, CLEAN_FILTER } from './actions-types'
import axios from 'axios'

export const getAllDogs = () => {
    return async (dispatch) => {
        // const resApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${MY_API_KEY}`)
        // const dataApi = resApi.data        
        const response = await axios.get('http://localhost:3001/dogs')
        const data = response.data

        return dispatch({
            type: GET_ALL_DOGS,
            payload: data
        })
    }
}

export const getAllTemperaments = () => {
    return async (dispatch) => {      
        const response = await axios.get('http://localhost:3001/temperaments')
        const data = response.data
        const temp = data.filter((e) => e.name !== null)

        return dispatch({
            type: GET_ALL_TEMPERAMENTS,
            payload: temp
        })
    }
}

export const orderDogs = (name) => {
    return {type: ORDER, payload: name}
}

export const orderbyWeight = (weight) => {
    return { type: ORDER_BYWEIGHT, payload: weight };
};

export const filterbyTemperaments = (temperament) => {
    return { type: FILTER_BYTEMPERAMENTS, payload: temperament };
  };

  export const filterfromDogs = (payload) => {
    return { type: FILTER_FROM_DOGS, payload };
  };

  export const getDogsName = (name) => {
    return async (dispatch) => {
      try {
        const response = await axios.get(`http://localhost:3001/dogs/name?name=${name}`);
      const data = response.data;
      
      return await dispatch({
        type: GET_DOGS_NAME,
        payload: data,
      });
      } catch (error) {
        alert("La raza ingresada no existe en la base de datos")
        return getAllDogs()
      }
    };
  };

  export const getDogDetail = (id) => {
    return async (dispatch) => {
      const response = await axios.get(`http://localhost:3001/dogs/${id}`);
      const data = response.data;
  
      return dispatch({
        type: GET_DOG_DETAIL,
        payload: data,
      });
    };
  };

  export const addDog = (payload) => {
      return  async (dispatch) => {
      const response =  axios.post('http://localhost:3001/dog', payload);
      const data = response.data
      
      
      return await dispatch({
        type: ADD_DOG,
        payload:data
      });
    };
  };

  export const cleanDetail = () => {
    return {
      type: CLEAN_DETAIL
    }
  }

  export const cleanFilter = () => {
    return {
      type: CLEAN_FILTER
    }
  }