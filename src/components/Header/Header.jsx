import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Link } from 'react-router-dom';

const Wrapper = styled('ul')`
  background-color: #fff;
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  @media (min-width: 48em) {
    flex-direction: row;
    justify-content: flex-end;
    padding: 1.5rem 4rem;
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
