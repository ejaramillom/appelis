import React, {
   useState
 } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import Top from "./Top";
import Favorite from "./Favorite";
import Playing from "./Playing";
import Popular from "./Popular";
import New from "./New";

const Mainbar = (props) => {
  const [ collapsed, setCollapsed ] = useState( true );
  const toggleNavbar = () => setCollapsed( !collapsed );
  return (
    <div>
      <Navbar color = "faded" light>
        <NavbarBrand href = "/" className = "mr-auto">Appelis</NavbarBrand>
        <NavbarToggler onClick = { toggleNavbar } className = "mr-2" />
        <Collapse isOpen = { !collapsed } navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href = "/">Mejores puntuaciones</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href = "/new">Estrenos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href = "/popular">Populares</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href = "/playing">En reproducción</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href = "favorite">Mis favoritas</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      <Switch>
        <Route exact path = "/" component = { Top } />
        <Route path = "/new" component = { New } />
        <Route path = "/popular" component = { Popular } />
        <Route path = "/playing" component = { Playing } />
        <Route path = "/favorite" component = { Favorite } />
        <Route path = "*" component = { NotFound } />
      </Switch>
    </div>
  );
}

export default Mainbar;

export const NotFound = (props) => {
  return (
    <h1>Pagina no encontrada</h1>
  )
}
