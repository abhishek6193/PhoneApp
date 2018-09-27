import React from 'react';
import {setFilter} from '../Actions';
import {Filters} from '../Constants/actionTypes';
import {connect} from 'react-redux';

const Search = ({onChange}) => {
	return (
          <input className="form-control mr-sm-2" id="search" type="text" placeholder="Search By Product Name" aria-label="Search"
          onChange={() => onChange(Filters.SEARCH_PRODUCT)} />        
	)
}

//  const mapDispatchToProps= (dispatch) =>{
// 	return{
// 		onChange: filter =>{
// 			let searchQuery=document.getElementById('search').value.trim();
// 			filter.text=(searchQuery!=="")?searchQuery:"";
// 			console.log("Search: "+filter.text)
// 			dispatch(setFilter(filter))
// 		}
// 	}
// }

// const Search=connect(null,mapDispatchToProps)(search)

export default Search;