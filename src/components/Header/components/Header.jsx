import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { Link } from 'react-router-dom';

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

const Header = () => (
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
    </Inner>
  </Wrapper>
);

export default Header;
