import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Product from './Product';

configure({adapter: new Adapter()});

describe('Testing Product Component', () => {
	let wrapper;
	// beforeEach(()=>
	// 		{wrapper = shallow(<Product />)}		
	// 	)
    it('should render product image and product name if product prop is set',() => {
    	let product={image: "some image",name: "some name"}
    	//wrapper.setProps({product: product})
 		wrapper = shallow(<Product product={product} />);
 		expect(wrapper.find('img').prop('src')).toEqual("some image");
 		expect(wrapper.find('img').prop('alt')).toEqual("some name");
 		expect(wrapper.find('span').text()).toEqual("some name");
 	});
 	it('should keep button name as Compare if compare flag of the product is set to false',()=>{
 		let product={compare: false};
 		wrapper = shallow(<Product product={product} />);
 		expect(wrapper.find('button').text()).toEqual("Compare");
 	});
 	it('should keep button name as Remove if compare flag of the product is set to true',()=>{
 		let product={compare: true};
 		wrapper = shallow(<Product product={product} />);
 		expect(wrapper.find('button').text()).toEqual("Remove");
 	});
});