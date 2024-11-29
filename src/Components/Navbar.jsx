import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'; 
import { Link } from 'react-router-dom';

const Navbarr = () => {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand href="/" className="navbar-brand">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto" >
            <Nav.Link className="nav-link"><Link to="/">Home</Link></Nav.Link>
            <Nav.Link className="nav-link"><Link to="/about">About</Link></Nav.Link>
            <Nav.Link className="nav-link"><Link to="/services">Services</Link></Nav.Link>
            <Nav.Link className="nav-link"><Link to="/skills">Skills</Link></Nav.Link>
            <Nav.Link className="nav-link"><Link to="/contact">Contact</Link></Nav.Link>
          </Nav>

          <div className="navbar-icons">
            <i className="fa-solid fa-magnifying-glass navbar-icon"></i>
            <Link to="/User">
            <i className="fa-solid fa-user navbar-icon"></i>
            </Link>
            <Link to="/contact">
              <i className="fa-solid fa-phone navbar-icon"></i>
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
