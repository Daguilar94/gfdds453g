import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {App, Page1, Page2, NotFound} from './App';
import './index.css';


// Implementa las rutas aca
class Main extends React.Component {
  render(){
    return(
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <IndexRedirect to='/page1' />
          <Route path='/page1' component={Page1} />
          <Route path='/page2' component={Page2} />
        </Route>
        <Route path="*" component={NotFound} />
      </Router>
    )
  }
}

ReactDOM.render(
  <Main />, // Es posible que tengas que hacer un cambio en esta linea.
  document.getElementById('root')
);
