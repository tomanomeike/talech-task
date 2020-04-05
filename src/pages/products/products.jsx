import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import List from '../../components/list/list';
import Create from'../../components/create/create';
import Show from '../../components/show/show';
import Edit from '../../components/edit/edit';
import PriceHistory from '../../highcharts/priceHistory';
import QuantityHistory from '../../highcharts/quantityHistory';
import '../../index.css';

const Products = ()=>{
return(
  <Router>
  <Switch>      
      <Route component={List} exact path='/products' />
      <Route component={Create} exact path='/products/create' />
      <Route component={Show} exact path='/products/:id' />
      <Route component={Edit} exact path='/products/:id/edit' /> 
      <Route component={PriceHistory} exact path='/products/:id/priceHistory' />  
      <Route component={QuantityHistory} exact path='/products/:id/quantityHistory' />     
    </Switch> 
  </Router>
)
}
  
  
export default Products;
  


