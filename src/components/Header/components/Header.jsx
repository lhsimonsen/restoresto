import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { Link } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md';

const Wrapper = styled('ul')`
  background-color: #fff;
  height: 100%;
  list-style: none;
  position: absolute;
  width: 100%;

  @media (min-width: 48em) {
    height: auto;
    width: auto;
  }
`;

const Inner = styled('div')`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;

  @media (min-width: 48em) {
    align-items: right;
    flex-direction: row;
    height: auto;
    justify-content: flex-end;
    padding: 1.5rem 2rem;
    width: 100vw;
  }
`;

export const NavLink = styled('li')`
  margin-left: 0;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-size: 0.75rem;

  > a {
    color: #222;
  }

  @media (min-width: 48em) {
    margin-left: 3rem;
    margin-bottom: 0;
  }
`;

export const Menu = styled('span')`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  @media (min-width: 48em) {
    display: none;
  }
`;

const Header = ({ onOpen, isOpen }) => (
  <Wrapper>
    <Inner>
      <NavLink>
        <Link to="/">Home</Link>
      </NavLink>
      <NavLink>
        <Link to="/about">About</Link>
      </NavLink>
      <NavLink>
        <Link to="/booking">Booking</Link>
      </NavLink>
      <Menu onClick={onOpen}>{isOpen ? <MdClose /> : <MdMenu />}</Menu>
    </Inner>
  </Wrapper>
);

Header.propTypes = {
  onOpen: PropTypes.func,
  isOpen: PropTypes.bool
};

export default Header;
