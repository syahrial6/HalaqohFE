import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FiLogIn } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {Logout,reset} from "../features/AuthSlices"

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
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Catatan Halaqoh</Navbar.Brand>
          <Nav className="justify-content-end">
          {user && user.role === "admin" &&(
        <Nav.Link href="/user">User</Nav.Link>
  )}
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#features">Tentang Kami</Nav.Link>
            <Nav.Link onClick={logout}>Logout<FiLogIn/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation2
