import React from 'react';
import List from './components/list/list';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '../src/';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={App} exact path='/' />
        <Route component={List} exact path='/products' />
      </Switch>
    </Router>
  );
};

export default App;
