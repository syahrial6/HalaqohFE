import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FiLogIn } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {Logout,reset} from "../features/AuthSlices"
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from "../logo.png";

const Navigation2 = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user} = useSelector(((state)=> state.auth));

    const logout = ()=>{
        dispatch(Logout())
        dispatch(reset());
        navigate("/")
    }
  return (
    <>
        {[  'md'].map((expand) => (
          <Navbar key={expand} bg="light" expand={expand} className="navbar">
            <Container fluid>
              <Navbar.Brand href="/"><img src={logo} width={65} height={55}/></Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Navigasi
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                  {user && user.role === "admin" &&(
        <Nav.Link href="/user">User</Nav.Link>
  )}
     
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="#tentang_kami">Tentang Kami</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
      
    
  )
}

export default Navigation2
