import React from 'react';
import {Filters} from '../Constants/actionTypes.js';
import {connect} from 'react-redux';
import {setFilter} from '../Containers/Actions';
import './Filter.css';

export const FilterLinks = ({onClick}) => {
	return (
         <div className="sidebar">
          <h5>PRICE RANGES</h5>
                <ul>
                    <li><a href="#" onClick={()=>onClick(Filters.SHOW_CHEAP)}>&le;10000</a></li>
                    <li><a href="#" onClick={()=>onClick(Filters.SHOW_AFFORDABLE)}>10000-20000</a></li>
                    <li><a href="#" onClick={()=>onClick(Filters.SHOW_EXPENSIVE)}>&ge;20000</a></li>
                </ul>
            <button className="btn btn-danger m-4" onClick={()=>onClick(Filters.SHOW_ALL)}>CLEAR FILTERS</button>
          </div>
	)
}

const mapDispatchToProps= (dispatch) =>{
	return{
		onClick: filter =>{
			dispatch(setFilter(filter))
		}
	}
}

const Filter=connect(null,mapDispatchToProps)(FilterLinks)

export default Filter;