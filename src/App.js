import React, { Component } from 'react';
import {Link} from 'react-router'


export class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <nav>
          <Link to="/page1">Page 1</Link>
          <Link to="/page2">Page 2</Link>
        </nav>
        {this.props.children}
      </div>
    )
  }
}


// No tienes que hacer nada por debajo de esta linea
//==================================================


export const Page1 = (props) => {
  return (
    <h1>Pagina 1</h1>
  )
}

export const Page2 = (props) => {
  return (
    <h1>Pagina 2</h1>
  )
}

export const NotFound = (props) => {
  return (
    <h1>Pagina no encontrada</h1>
  )
}
