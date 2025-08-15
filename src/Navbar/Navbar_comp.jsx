import React from 'react';
import { NavLink } from 'react-router-dom';
import navstyle from './Navbar_comp.module.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navbar_comp = () => {
  return (
    <Navbar sticky="top" expand="lg" bg="dark" data-bs-theme="dark" className={`p-4 ${navstyle.navbar_main}`}>
      <Container>
        <Navbar.Brand as={NavLink} to="/" className='fs-2 text-uppercase fw-bolder'>
          Start Framework
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`ms-auto p-2 ${navstyle.Nlinks}`}>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `nav-link ${navstyle.navLink} ${isActive ? navstyle.activeLink : ''}`
              }
            >
              ABOUT
            </NavLink>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `nav-link ${navstyle.navLink} ${isActive ? navstyle.activeLink : ''}`
              }
            >
              PORTFOLIO
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `nav-link ${navstyle.navLink} ${isActive ? navstyle.activeLink : ''}`
              }
            >
              CONTACT
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar_comp;
