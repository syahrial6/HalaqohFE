import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FiLogIn } from 'react-icons/fi';

const Navigation = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Catatan Halaqoh</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#tentang_kami">Tentang Kami</Nav.Link>
            <Nav.Link href="/login">Login<FiLogIn/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation
