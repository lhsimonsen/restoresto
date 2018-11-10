import React from 'react';
import { shallow } from 'enzyme';
import { MdClose } from 'react-icons/md';
import Header, { NavLink, Menu } from '../Header';

describe('Header', () => {
  it('renders navigation links', () => {
    const component = shallow(<Header />);
    expect(component.find(NavLink).length).toEqual(3);
  });

  it('passes isOpen prop', () => {
    const isOpen = 'isOpen';
    const component = shallow(<Header isOpen={isOpen} />);
    expect(component.find(MdClose).length).toEqual(1);
  });

  it('passes onOpen prop', () => {
    const onOpen = 'onOpen';
    const component = shallow(<Header onOpen={onOpen} />);
    expect(component.find(Menu).prop('onClick')).toEqual(onOpen);
  });
});
