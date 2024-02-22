import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {Outlet} from "react-router-dom";
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import logo from '../logo.png';


const AppLayout = () => {
  return (
    <div>
      <Navbar expand="lg" className="navbar">
        <Container fluid>
          <Navbar.Brand className="brand" href="#">
            <img width="93" src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0" 
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link className="link" href="/">Home</Nav.Link>
              <Nav.Link className="link" href="/movies">Movies</Nav.Link>
            </Nav>
            <Form className="d-flex input-form">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 search-input"
                aria-label="Search"
              />
              <div className="search-icon-box">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet/>
    </div>
  )
}

export default AppLayout
