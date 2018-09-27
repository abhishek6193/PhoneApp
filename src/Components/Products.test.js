import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Products from './Products';
import Product from './Product';

configure({adapter: new Adapter()});

describe('Testing Products Component', () => {
    it('should render as many product components as the number of elements in items prop',() => {
 		let itemsArray = [{id: 0}];
 		let wrapper = shallow(<Products items={itemsArray} />);
 		expect(wrapper.find(Product)).toHaveLength(itemsArray.length);
 	});
});