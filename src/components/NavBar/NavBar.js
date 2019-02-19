import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import './NavBar.css';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">

          <Link to="/" className="navbar-brand">
            AutoNuoma
          </Link>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/cars" className="nav-link">
                  Automobiliai
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/stations" className="nav-link">
                  Nuomos punktai
                </Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Administravimas
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem><Link to="/cars/add-car-page" >Pridėti automobilį</Link></DropdownItem>
                  <DropdownItem><Link to="/stations/add-station-page" >Pridėti nuomos punktą</Link></DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;