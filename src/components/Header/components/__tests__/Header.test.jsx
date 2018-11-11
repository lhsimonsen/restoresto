import React from 'react';
import { shallow } from 'enzyme';
import Header, { NavLink } from '../Header';

describe('Header', () => {
  it('renders navigation links', () => {
    const component = shallow(<Header />);
    expect(component.find(NavLink).length).toEqual(3);
  });

  it('passes onNavigate prop', () => {
    const onNavigate = 'onNavigate';
    const component = shallow(<Header onNavigate={onNavigate} />);
    expect(
      component
        .find(NavLink)
        .at(0)
        .prop('onClick')
    ).toBe(onNavigate);
  });
});
