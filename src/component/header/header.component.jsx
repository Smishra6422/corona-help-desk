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
import { withRouter } from "react-router-dom";

import "./header.style.scss";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#2ecc72" };
  } else {
    return { color: "#ffffff" };
  }
};

const Header = ({ history }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Help-Desk</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <hr />
          <Nav navbar>
            <NavItem>
              <NavLink style={currentTab(history, "/")} href="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={currentTab(history, "/symptom")} href="/symptom">
                Symptom
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={currentTab(history, "/precaution")}
                href="/precaution"
              >
                Precaution
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={currentTab(history, "/world")} href="/world">
                World Data
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={currentTab(history, "/about")} href="/about">
                About Me
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default withRouter(Header);
