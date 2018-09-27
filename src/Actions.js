import * as type from './Constants/actionTypes';
import fetch from 'cross-fetch';

export const getProducts=()=>dispatch=>
		fetch(`products.json`).then(response=>response.json()).then(response=>{
        dispatch({type: type.GET_ITEMS,
        payload: response.products})
}
)

export const compare = product => ({
	type: type.COMPARE_PRODUCT,
	product
})

export const resetCompare = () => ({
	type: type.RESET_COMPARE
})

export const setFilter = filter => ({ 
  type: type.SET_FILTER,
  filter 
})