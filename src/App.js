/* eslint-disable class-methods-use-this */
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './components/Header/Header';

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Booking = () => <h2>Booking</h2>;
const Contact = () => <h2>Contact</h2>;

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
