import React from 'react';
import './Product.css';

const Product = ({product,onCompare}) => {
	return (
		<div className="products col-sm-4">
			<div className="card card-size m-4 shadow-sm" style={{width: "15rem"}}>
                <div className="card-header" style={{textAlign: "center"}}>
                    <span className="card-text"><strong>{product.name}</strong></span>
                </div>
                <div className="card-body">
				    <img src={product.image} alt={product.name} className="card-img-top px-3 py-3" height="350" width="30%"/>
                
				<div className="overlay">
        			<button className="middle btn btn-primary-outline" onClick={()=>onCompare(product)}>
          			{product.compare ? "Remove" : "Compare"}
        			</button>
        		</div>
                </div>
            </div>
		</div>
	)
}

export default Product;