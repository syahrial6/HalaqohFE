import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function EditUser() {
    const [nama,setNama] =useState("");
  const [nama_lengkap,setNamalengkap] =useState("");
  const [email,setEmail] =useState("")
  const [password,setPassword] =useState("")
  const [confPassword,setconfPassword] =useState("")
  const [role,setRole] =useState("")
  const [pesan,setPesan] =useState("")
  const {uuid} =useParams();

  const navigate = useNavigate();

  useEffect(()=>{
    const getuserbyid = async()=>{
        try {
            const response = await axios.get(`http://localhost:5000/users/${uuid}`)
            setNama(response.data.name)
            setNamalengkap(response.data.nama_lengkap)
            setEmail(response.data.email)
            setRole(response.data.role)
        } catch (error) {
            setPesan(error.response.data.msg);
        }
    }
    getuserbyid();
},[uuid])

  const edituser = async(e)=>{
    e.preventDefault()
    try {
      await axios.patch(`http://localhost:5000/users/${uuid}`,{
        name : nama,
        nama_lengkap : nama_lengkap,
        email : email,
        password : password,
        confPassword : confPassword,
        role : role
      })
      navigate("/user")
    } catch (error) {
      if (error.response){
        setPesan(error.response.data.msg);
      }
    }
  }

  return (
    <div className="Auth-form-container">
    <form className="Auth-form" onSubmit={edituser}>
      <p>{pesan}</p>
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Tambah Data</h3>
        <div className="form-group mt-3">
          <label>Nama</label>
          <input
            type="text"
            className="form-control mt-1"
            placeholder="Nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}

          />
        </div>
        <div className="form-group mt-3">
          <label>Nama Lengkap</label>
          <input
            type="text"
            className="form-control mt-1"
            placeholder="Nama Lengkap"
            value={nama_lengkap}
            onChange={(e) => setNamalengkap(e.target.value)}

          />
        </div>
        <div className="form-group mt-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control mt-1"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            
          />
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control mt-1"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label>Konfirmasi Password</label>
          <input
            type="password"
            className="form-control mt-1"
            placeholder="Password"
            value={confPassword}
            onChange={(e) => setconfPassword(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label>Role</label>
          <input
            type="text"
            className="form-control mt-1"
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>
        <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-primary">
            Simpan
          </button>
        </div>
      </div>
    </form>
  </div>
  )
}

export default EditUser
