import React from 'react';
import './Header.css';
import Search from './Search';

const Header =({openNav,badgeNumber,onReset,onSearch})=>{
	return (
		<div>
			<nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
		      <a className="navbar-brand" href="#">Product Comparison</a>
		      <span className="header">
		      	<button className="btn btn-success m-2" onClick={openNav} disabled={badgeNumber>=2?false:true}>Compare</button>
		      	<span className="badge badge-pill badge-primary m-2">{badgeNumber}</span>
		      	<button className="btn btn-warning m-2" onClick={()=>onReset()} disabled={badgeNumber>=2?false:true}>Reset</button>
		      </span>
		      <div className="collapse navbar-collapse m-2" id="navbarsExampleDefault">
		        <Search onChange={onSearch}/>
		      </div>
		    </nav>
		</div>
		)
}

export default Header;