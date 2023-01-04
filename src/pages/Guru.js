import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {FiEdit2,FiDelete, FiRewind } from 'react-icons/fi';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { getMe } from '../features/AuthSlices';
import axios from 'axios';
import Navigation2 from '../components/Navigation2';

function Guru() {
    const [siswa,setSiswa] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isError,user} = useSelector(((state)=> state.auth));
    const {id} = useParams();

    useEffect(()=>{
        dispatch(getMe());
        getSiswa()
    },[dispatch])
    useEffect(()=>{
        if (isError){
            navigate("/login")
        }
    },[isError,navigate])


    const getSiswa = async()=>{
        const response = await axios.get("http://localhost:5000/siswa")
        setSiswa(response.data)
    }
    const deleteSiswa = async(uuid)=>{
        await axios.delete(`http://localhost:5000/siswa/${uuid}`)
        getSiswa();
    }
  return (
    <div>
      <Navigation2/>
      <div className='tabel'>
        <h2>Halo.... {user && user.name}</h2>
        {user && user.role === "admin" &&(
        <Link to={'/dashboard'}><Button variant="success"><FiRewind/>Kemabali ke Dashboard</Button></Link>
  )}
    |<Link to={`/dashboard/${id}/tambah`}><Button variant="primary"><FiEdit2/>Tambah</Button></Link>
    <Table bordered>
      <thead>
        <tr>
          <th>NO</th>
          <th>Nama</th>
          <th>Kelas</th>
          <th>Guru</th>
          <th>Hafalan</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {siswa.map((siswa1, index)=>(
            <tr key={siswa1.uuid}>
            <td>{index+1}</td>
            <td>{siswa1.name}</td>
            <td>{siswa1.kelas}</td>
            <td>{siswa1.user.name}</td>
            <td>{siswa1.hafalan}</td>
            <td> 
              <Link to={`/dashboard/edit/${siswa1.uuid}`}><Button variant="primary"><FiEdit2/>Edit</Button></Link>
               | <Link><Button variant="danger" onClick={()=>deleteSiswa(siswa1.uuid)}><FiDelete/>Delete</Button></Link>
              </td>
          </tr>
        ))}
          
        
      </tbody>
    </Table>
    </div>
    </div>
  )
}

export default Guru
