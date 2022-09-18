import React from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="md">
      <Container style={{ fontSize: "1.5rem" }}>
        <Navbar.Brand href="/" className="fw-bold" style={{ fontSize: "2rem" }}>
          Van
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-end">
            <Nav.Link href="/illustration">Illustration</Nav.Link>
            <Nav.Link href="/animation">Animation</Nav.Link>
            <Nav.Link href="/life">Life Drawing</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
