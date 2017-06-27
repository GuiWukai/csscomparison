import React, { Component } from 'react';
import { Navbar, NavItem} from 'react-materialize';

class MaterializeNavBar extends Component {

  render() {
    return (
      <div>
      <Navbar brand='logo' right>
      <NavItem href='get-started.html'>Getting started</NavItem>
      <NavItem href='components.html'>Components</NavItem>
      </Navbar>
      </div>
    );
  }

}

export default MaterializeNavBar;

