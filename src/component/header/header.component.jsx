import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import { MDBIcon } from "mdbreact";

import "./header.style.scss";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">HelpDesk</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav style={{ marginLeft: "42%" }} navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/symptom">Symptom</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/precaution">Precaution</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/world">World Data</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About Me</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
