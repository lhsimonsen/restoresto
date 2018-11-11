import React from 'react';
import { shallow } from 'enzyme';
import { MdClose } from 'react-icons/md';
import HeaderContainer, { Menu } from '../HeaderContainer';
import Header from '../../components/Header';

describe('HeaderContainer', () => {
  it('renders correctly', () => {
    const component = shallow(<HeaderContainer />);
    expect(component).toMatchSnapshot();
  });

  it('sets isOpen', () => {
    const component = shallow(<HeaderContainer />);
    const setIsOpen = jest.spyOn(component.instance(), 'setIsOpen');

    expect(component.find(MdClose).length).toBe(0);

    component.instance().forceUpdate();
    component.find(Menu).simulate('click');

    expect(setIsOpen).toHaveBeenCalled();
    expect(component.find(MdClose).length).toBe(1);
  });
});
