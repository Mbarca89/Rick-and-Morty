import {ADD_FAV,REMOVE_FAV,FILTER,ORDER} from './action-types.js'
import axios from 'axios';


export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return async (dispatch) => {
      const {data} = await axios.post(endpoint, character)
         return dispatch({
            type: ADD_FAV,
            payload: data,
         });
      
   };
    // return {type: ADD_FAV, payload: character}
}

export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
   return async (dispatch) => {
      const {data} = await axios.delete(endpoint)
      
         return dispatch({
            type: REMOVE_FAV,
            payload: data,
      });
      
   };
    // return {type: REMOVE_FAV, payload: id}
}

export const filterCards = (gender) => {
    return {type: FILTER, payload: gender}
}

export const orderCards = (ord) => {
    return {type: ORDER, payload: ord }
}
