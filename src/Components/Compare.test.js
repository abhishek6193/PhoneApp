import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Compare from './Compare';

configure({adapter: new Adapter()});

describe('Testing Compare Component',()=>{
	let wrapper;
	let products=[{
		      "id": "1",
		      "name": "Apple iPhone SE",
		      "price": "₹18,999",
		      "colors": ["Space Grey", "Rose Gold", "Silver", "Gold"],
		      "ROM": "32GB",
		      "Display": "10.16cm (4 inch) Retina Display",
		      "Camera": "12MP Rear Camera | 1.2MP Front Camera",
		      "Processor": "Apple A9 64-bit processor and Embedded M9 Motion Co-processor",
		      "Warranty": "Brand Warranty of 1 Year"
    		},
    		{
		      "id": "2",
		      "name": "Apple iPhone 6",
		      "price": "₹24,999",
		      "colors": ["Space Grey", "Gold"],
		      "ROM": "32GB",
		      "Display": "11.94cm (4.7 inch) Retina HD Display",
		      "Camera": "8MP Rear Camera | 1.2MP Front Camera",
		      "Processor": "Apple A8 64-bit processor and M8 Motion Co-processor",
		      "Warranty": "Brand Warranty of 1 Year"
    		}
    		]
	it('should compare as many products as there are present in the products prop',()=>{
		wrapper=shallow(<Compare products={products}/>);
		expect(wrapper.find('thead').children().find('th').children().map(node=>node)).toHaveLength(products.length);
	});
	it('should render the correct name',()=>{
		wrapper=shallow(<Compare products={products}/>);
		expect(wrapper.find('thead').children().find('th').children().map(node=>node.text())).toEqual(["Apple iPhone SE","Apple iPhone 6"]);
	});
	it('should render the correct colors',()=>{
		wrapper=shallow(<Compare products={products}/>);
		expect(wrapper.find('.colors').children().find('td').children().map(node=>node.text())).toEqual(["Space Grey, ", "Rose Gold, ", "Silver, ", "Gold, ", "Space Grey, ", "Gold, "]);
	});
})