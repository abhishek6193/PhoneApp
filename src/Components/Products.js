import React from 'react';
import Product from './Product';
import './Product.css';

const Products = ({items,onCompare}) => {
	return (
		<div>
			<div className="prod-margin container row">
				{items.map(item => <Product key={item.id} product={item} onCompare={onCompare}/>)}
			</div>
		</div>
		)
}
export default Products;