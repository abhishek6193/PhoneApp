import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Results from './Results';
import Compare from './Compare';

configure({adapter: new Adapter()});

describe('Testing Results Component',()=>{
	let wrapper;
	it('should render the Compare Component and pass its products prop to Compare Component',()=>{
		let products=[{id: "some id"},{id: "some other id"}];
		wrapper=shallow(<Results products={products} />);
		expect(wrapper.find(Compare)).toHaveLength(1);
		expect(wrapper.find(Compare).props().products).toEqual(products);
	})
})