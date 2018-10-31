import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Link } from 'react-router-dom';

const Wrapper = styled('ul')`
  background-color: #222;
  display: flex;
`;

export const NavLink = styled('li')`
  color: #fff;
  flex: 1;
`;

const Header = () => (
  <Wrapper>
    <NavLink>
      <Link to="/">Home</Link>
    </NavLink>
    <NavLink>
      <Link to="/about">About</Link>
    </NavLink>
    <NavLink>
      <Link to="/booking">Booking</Link>
    </NavLink>
  </Wrapper>
);

Header.propTypes = {};

export default Header;
