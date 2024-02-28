import React, { useState } from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import logo from '../logo.png';

const AppLayout = () => {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();
  const searchByKeyword = (event) => {
    event.preventDefault();
    //url바꿔주기
    navigate(`/movies?q=${keyword}`);
    setKeyword('');
  };
  return (
    <div>
      <Navbar expand="lg" className="navbar">
        <Container fluid>
          <Navbar.Brand className="brand" onClick={() => navigate('/')}>
            <img width="93" src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0" 
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link className="link" onClick={() => navigate('/')}>Home</Nav.Link>
              <Nav.Link className="link" onClick={() => navigate('/movies')}>Movies</Nav.Link>
            </Nav>
            <Form className="d-flex input-form" onSubmit={searchByKeyword}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 search-input"
                aria-label="Search"
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}                
              />
              <Button variant="outline-danger" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet/>
    </div>
  )
}

export default AppLayout
