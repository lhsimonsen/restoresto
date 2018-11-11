import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { MdMenu, MdClose } from 'react-icons/md';
import styled from 'react-emotion';
import Header from '../components/Header';

export const Menu = styled('span')`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 10;

  @media (min-width: 48em) {
    display: none;
  }
`;

const Hamburger = styled(MdMenu)`
  color: #fff;
`;

class HeaderContainer extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
      width: window.innerWidth
    };

    this.setWidth = this.setWidth.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.setWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setWidth);
  }

  setWidth() {
    this.setState({
      width: window.innerWidth
    });
  }

  setIsOpen = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  render() {
    const { isOpen, width } = this.state;
    return (
      <Fragment>
        <Menu onClick={this.setIsOpen}>
          {isOpen ? <MdClose /> : <Hamburger />}
        </Menu>
        {(isOpen || width > 767) && <Header onNavigate={this.setIsOpen} />}
      </Fragment>
    );
  }
}

HeaderContainer.propTypes = {};

export default HeaderContainer;
