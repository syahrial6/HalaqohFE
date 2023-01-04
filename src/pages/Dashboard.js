import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/esm/Button';
import { Link, useNavigate } from 'react-router-dom';
import {FiEdit2} from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { getMe } from '../features/AuthSlices';
// dwda
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FiLogIn } from 'react-icons/fi';

import {Logout,reset} from "../features/AuthSlices"
import axios from 'axios';
import Navigation2 from '../components/Navigation2';


function Dashboard() {
    const [nama_guru,setnamaguru] = useState([]); 
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isError} = useSelector(((state)=> state.auth));
    const {user} = useSelector(((state)=> state.auth));

    useEffect(()=>{
        dispatch(getMe());
        getuser();
    },[dispatch])
    useEffect(()=>{
        if (isError){
            navigate("/login")
        }
    },[isError,navigate])


    // logout
    const logout = ()=>{
        dispatch(Logout())
        dispatch(reset());
        navigate("/")
    }
    // mendapatkan nama nama guru untuk card
    const getuser = async()=>{
        const response = await axios.get("http://localhost:5000/users")
        setnamaguru(response.data)
    }
  return (
    <div>
         <Navigation2/>
    {user && user.role === "admin" &&(
        <Link to={'/tambah_user'}><Button variant="primary"><FiEdit2/>Tambah</Button></Link>

  )}
    <Row xs={2} md={4} className="g-4">
    
    {nama_guru.map((guru)=>( 
  <Col key={guru.uuid}>
  
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{guru.nama_lengkap}</Card.Title>
        {/* <Card.Subtitle className="mb-2 text-left">Lorem ipsum dolor sit amet.</Card.Subtitle> */}
        <Card.Text>
          Kategori 5 Juz Kelas 9
        </Card.Text>
        <Link to={`/dashboard/${guru.uuid}`}>
        <Button variant="primary">Lihat Detail</Button>{' '}
        </Link>
      </Card.Body>
    </Card>
    </Col>
    ))}
    
    </Row>
    </div>
  )
}

export default Dashboard
