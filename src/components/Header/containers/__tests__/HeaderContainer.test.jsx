import React from 'react';
import { shallow } from 'enzyme';
import { MdClose } from 'react-icons/md';
import HeaderContainer from '../HeaderContainer';
import Header, { Menu } from '../../components/Header';

describe('HeaderContainer', () => {
  it('sets isOpen', () => {
    const component = shallow(<HeaderContainer />);
    const setIsOpen = jest.spyOn(component.instance(), 'setIsOpen');

    component.instance().forceUpdate();
    component
      .find(Header)
      .dive()
      .find(Menu)
      .simulate('click');

    expect(setIsOpen).toHaveBeenCalled();
  });
});
