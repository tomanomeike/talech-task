import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../../index.css';
import App from '../../App';
import List from '../../components/list/list';
import Create from'../../components/create/create';
import Show from '../../components/show/show';
import Edit from '../../components/edit/edit';

const Products = ()=>{
return(
  <Router>
  <Switch>
      <Route component={App} exact path='/' />
      <Route component={List} exact path='/products' />
      <Route component={Show} exact path='/products/:id' />
      <Route component={Edit} exact path='/products/:id/edit' />
      <Route component={Create} exact path='/products/create' />
    </Switch> 
  </Router>
)
}
  
    {/* <Switch> */}
        {/* <Route component={App} exact path='/' />
        <Route component={List} exact path='/products' />
        <Route component={Show} exact path='/products/:id' />
        <Route component={Edit} exact path='/products/:id/edit' />
        <Route component={Create} exact path='/products/create' /> */}


        {/* <Route component={List} exact path='/' />
        <Route component={Show} exact path='/:id' />
        <Route component={Edit} exact path='/:id/edit' />
        <Route component={Create} exact path='/create' />
    </Switch> */}
export default Products;
  


