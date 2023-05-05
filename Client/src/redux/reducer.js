import {ADD_FAV,REMOVE_FAV,FILTER,ORDER} from './action-types.js'


const initialState = {
    myFavorites: [],
    filteredFavs: [],
}

const reducer = (state = initialState, action) => {
        switch(action.type){
        case ADD_FAV:
            return {
                ...state,
                myFavorites: action.payload,
            }
        
        case REMOVE_FAV: 
            return {
                ...state,
                myFavorites: action.payload,
                filteredFavs: action.payload
            }

        case FILTER:
            const filteredCharacters = state.myFavorites.filter(char => char.gender === action.payload)
            return {
                ...state,
                filteredFavs:
                    action.payload === 'Todos'
                    ? state.myFavorites
                    : filteredCharacters
            }

        case ORDER:
            return {
                ...state,
                filteredFavs:
                    action.payload === 'A'
                    ? state.filteredFavs.sort((a,b) => a.id-b.id)
                    : state.filteredFavs.sort((a,b) => b.id-a.id)
            }
        
            default: 
                return {
                ...state                 
            };
    }
}


export default reducer;