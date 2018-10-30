/* eslint-disable class-methods-use-this */
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Booking = () => <h2>Booking</h2>;
const Contact = () => <h2>Contact</h2>;
const Header = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/booking">Booking</Link>
    </li>
  </ul>
);

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
