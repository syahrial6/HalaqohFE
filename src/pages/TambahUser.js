import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import url from '../features/url';
import Select from 'react-select'



function TambahUser() {
  const [nama, setNama] = useState("");
  const [nama_lengkap, setNamalengkap] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confPassword, setconfPassword] = useState("")
  const [role, setRole] = useState("")
  const [pesan, setPesan] = useState("")

  const navigate = useNavigate();

  const options = [
    { value: 'user', label: 'User' },
    { value: 'admin', label: 'Admin' }
  ]

  const tambahuser = async (e) => {
    e.preventDefault()
    try {
      await axios.post(`${url}/users`, {
        name: nama,
        nama_lengkap: nama_lengkap,
        email: email,
        password: password,
        confPassword: confPassword,
        role: role
      })
      navigate("/user")
    } catch (error) {
      if (error.response) {
        setPesan(error.response.data.msg);
      }
    }
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={tambahuser}>
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
            <Select options={options}
              placeholder="Masukkan Surah"
              onChange={(e) => setRole(e.value)}
              type="text"
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

export default TambahUser
