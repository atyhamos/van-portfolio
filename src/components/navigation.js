import { Link } from "gatsby"
import React from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="md">
      <Container style={{ fontSize: "1.5rem" }}>
        <Navbar.Brand className="fw-bold" style={{ fontSize: "2rem" }}>
          <Link className="nav-links" to="/#main">
            Van
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-end">
            <Nav.Link>
              <Link className="nav-links" to="/illustration">
                Illustration
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nav-links" to="/animation">
                Animation
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nav-links" to="/life">
                Life Drawing
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nav-links" to="/about">
                About
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
