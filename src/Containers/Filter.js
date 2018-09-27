import React from 'react';
import {Filters} from '../Constants/actionTypes.js';
import {connect} from 'react-redux';
import {setFilter} from '../Actions';
import './Filter.css';

export const FilterLinks = ({onClick}) => {
	return (
         <div className="sidebar bg-dark">
          <h5 className="text-center text-white">Choose Price Range</h5>
                <ul className="mt-4" style={{listStyleType: "none"}}>
                    <li className="py-1"><a href="#" className="btn-success" onClick={()=>onClick(Filters.SHOW_CHEAP)}>&le; ₹10,000</a></li>
                    <li className="py-1"><a href="#" className="btn-warning" onClick={()=>onClick(Filters.SHOW_AFFORDABLE)}>₹10,000- ₹20,000</a></li>
                    <li className="py-1"><a href="#" className="btn-danger" onClick={()=>onClick(Filters.SHOW_EXPENSIVE)}>&ge; ₹20,000</a></li>
                </ul>
            <button className="btn btn-primary ml-5 my-2" onClick={()=>onClick(Filters.SHOW_ALL)}>SHOW All</button>
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