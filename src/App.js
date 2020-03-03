import React from 'react';
import ListApp from './list/list-app';
import ProductDetailPage from './ProductDetailPage'
import { Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import { List } from 'react-bootstrap/lib/Media';

const history = createBrowserHistory();

const App = () => {
  return(
    <Router history={history}>
    <nav>
        <h1>Warehouse</h1>
        <Link to="/products">Products</Link>
        {/* &nbsp;
        <Link to="/about">About</Link>
        &nbsp;
        <Link to="/results">Results</Link> */}
    </nav>
    <Switch>
        <Route exact path="/products" component={ListApp} />
        <Route path="/products/:item_id" component={ProductDetailPage}/>
        <Redirect to="/" />
    </Switch>
</Router>
  )
  //  <ListApp />;
};

export default App;
