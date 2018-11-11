import React from 'react';
import { shallow } from 'enzyme';
import Header, { NavLink } from '../Header';

describe('Header', () => {
  it('renders navigation links', () => {
    const component = shallow(<Header />);
    expect(component.find(NavLink).length).toEqual(3);
  });
});
