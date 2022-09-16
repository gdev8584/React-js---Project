import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

const Header = () => {
  return (
    <><Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">User Registration</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/login">Home</Nav.Link>
        <Nav.Link href="/details">Movies</Nav.Link>
      </Nav>
    </Container>
  </Navbar></>
  )
}

export default Header