import React, { useEffect, useState } from 'react'
import Navigation from '../components/Navigation'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ListWali() {
    const [siswa,setSiswa] = useState([]);
    const {id} = useParams();


    useEffect(()=>{
        getSiswa()
        
    },[])
    

    const getSiswa = async()=>{
        const response = await axios.get(`http://localhost:5000/guru/siswa/${id}`)
        setSiswa(response.data)
    }
  return (
    <div>
      <Navigation/>
      <div className='tabel'>
    <Table bordered>
      <thead>
        <tr>
          <th>NO</th>
          <th>Nama</th>
          <th>Kelas</th>
          <th>Guru</th>
          <th>Hafalan</th>
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
          </tr>
        ))}
          
        
      </tbody>
    </Table>
    </div>
    </div>
  )
}

export default ListWali
