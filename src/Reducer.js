import * as type from './Constants/actionTypes';
import { combineReducers } from 'redux';

const initialState = {
	"products" : [] 
}

const productsList=function (state=initialState,action) {
    switch(action.type){
        case type.GET_ITEMS:
            console.log("dispatching async");
            return {...state,products:action.payload.map(product=>({...product,compare:false}))};
        case type.COMPARE_PRODUCT:
            return {...state,products:state.products.map(product=>
              product.id===action.product.id ? ({...product,compare: !product.compare}):product)};
        case type.RESET_COMPARE:
            return {...state,products:state.products.map(product=> ({...product,compare: false}))};
        default:
        	return state;
    }
}

const { SHOW_ALL } = type.Filters;

function visibilityFilter(state = {filter: SHOW_ALL}, action) {
  switch (action.type) {
    case type.SET_FILTER:
      console.log("setting filter ", {...state,filter: action.filter})
      return {...state,filter: action.filter}
    default:
      return state
  }
}

const rootReducer = combineReducers({
  visibilityFilter,
  productsList
})

export default rootReducer;