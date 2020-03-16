import React from 'react';
import Products from '../src/pages/products/products';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '../src/';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={App} exact path='/' />
        <Route component={Products} exact path='/products' />
      </Switch>
    </Router>
  );
};

export default App;
