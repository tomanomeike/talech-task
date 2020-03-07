import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import List from '../src/components/list/list';
// import Edit from './components/edit';
import Create from '../src/components/create/create';
import Show from '../src/components/show/show';
import Edit from '../src/components/edit/edit'


ReactDOM.render(
<Router>
    <div>
   
      <Route component={App}  exact path="/" />
      <Route component={List}  exact path="/products" />
      <Route path="/products/:id" component={Show}/>
      <Route component={Edit}  path="/edit/:id" />
      <Route exact path="/products/create" render={(props) =>
                <Create {...props} />
            } />
      {/* <Route component={Show}   path="/show/:id" /> */}
  
    </div>
  </Router>, 

document.getElementById('root'));


serviceWorker.unregister();
