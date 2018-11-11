/* eslint-disable class-methods-use-this */
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'react-emotion';
import Header from './components/Header/containers/HeaderContainer';
import hoze from './images/hoze.jpg';

const About = () => <h2>About</h2>;
const Booking = () => <h2>Booking</h2>;
const Contact = () => <h2>Contact</h2>;
const Index = styled('div')`
  height: 100vh;
  width: 100vw;
  background: url(${hoze}) no-repeat center center fixed;
  background-size: cover;
`;

const AppRouter = () => (
  <Router>
    <div>
      <Header />
      <Route path="/" exact component={Index} />
      <Route path="/about/" component={About} />
      <Route path="/booking/" component={Booking} />
      <Route path="/contact/" component={Contact} />
    </div>
  </Router>
);

export default AppRouter;
