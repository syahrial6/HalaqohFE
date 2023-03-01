import React, { useEffect, useState } from 'react'
import { FiEdit2, FiDelete, FiRewind } from 'react-icons/fi';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Layout from '../components/Layout';
import url from '../features/url';

function User() {
  const [user, setUser] = useState([]);


  useEffect(() => {
    getuser()
  }, [])
  const getuser = async () => {
    const response = await axios.get(`${url}/users`)
    setUser(response.data)
  }
  const deleteuser = async (userId) => {
    await axios.delete(`${url}/users/${userId}`)
    getuser();
  }
  return (
    <Layout>
      <div className='tabel'>
        <Link to={'/dashboard'}><Button variant="success"><FiRewind />Kembali Ke Dashboard</Button></Link>|
        <Link to={'/guru/tambah'}><Button variant="primary"><FiEdit2 />Tambah</Button></Link>
        <Table bordered>
          <thead>
            <tr>
              <th>NO</th>
              <th>Nama</th>
              <th>Nama Lengkap</th>
              <th>Email</th>
              <th>Role</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user1, index) => (
              <tr key={user1.uuid}>
                <td>{index + 1}</td>
                <td>{user1.name}</td>
                <td>{user1.nama_lengkap}</td>
                <td>{user1.email}</td>
                <td>{user1.role}</td>
                <td>
                  <Link to={`/dashboard/edit_guru/${user1.uuid}`}><Button variant="primary"><FiEdit2 />Edit</Button></Link>
                  | <Link><Button variant="danger" onClick={() => deleteuser(user1.uuid)}><FiDelete />Delete</Button></Link>
                </td>
              </tr>

            ))}



          </tbody>
        </Table>
      </div>
    </Layout>
  )
}

export default User
