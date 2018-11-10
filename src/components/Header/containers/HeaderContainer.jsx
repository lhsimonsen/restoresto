import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class HeaderContainer extends Component {
  state = {
    isOpen: false
  };

  setIsOpen = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  render() {
    const { isOpen } = this.state;
    return <Header onOpen={this.setIsOpen} isOpen={isOpen} />;
  }
}

HeaderContainer.propTypes = {};

export default HeaderContainer;
