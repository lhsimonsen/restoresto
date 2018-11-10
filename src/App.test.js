import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import Header from './components/Header/containers/HeaderContainer';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe('Header', () => {
    it('is rendered', () => {
      const component = shallow(<App />);
      expect(component.find(Header).length).toBe(1);
    });
  });
});
