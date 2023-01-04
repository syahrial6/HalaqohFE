import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getMe } from '../features/AuthSlices';

function Edit() {
    const [name,setName] = useState("");
  const [kelas,setKelas] = useState("");
  const [hafalan,setHafalan] = useState("");
  const [pesan,setPesan] = useState("");
  const {uuid} = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isError} = useSelector(((state)=> state.auth));
    const {user} = useSelector(((state)=> state.auth));

    useEffect(()=>{
        dispatch(getMe());
        const getsiswabyid = async()=>{
            try {
                const response = await axios.get(`http://localhost:5000/siswa/${uuid}`)
                setName(response.data.name)
                setKelas(response.data.kelas)
                setHafalan(response.data.hafalan)
            } catch (error) {
                setPesan(error.response.data.msg);
            }
        }
        getsiswabyid();
    },[dispatch])


// -----------------------------------------------------------//




    useEffect(()=>{
        if (isError){
            navigate("/login")
        }
    },[isError,navigate])

    const editsiswa = async(e)=>{
        e.preventDefault()
        try {
          await axios.patch(`http://localhost:5000/siswa/${uuid}`,{
            name : name,
            kelas : kelas,
            hafalan : hafalan
          })
          navigate(`/dashboard/${uuid}`)
        } catch (error) {
          if (error.response){
            setPesan(error.response.data.msg);
          }
        }
      }
  return (
    <div className="Auth-form-container">
    <form className="Auth-form" onSubmit={editsiswa}>
        <p>{pesan}</p>
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Edit Data</h3>
        <div className="form-group mt-3">
          <label>Nama</label>
          <input
            type="text"
            className="form-control mt-1"
            placeholder="Nama"
            value={name}
            onChange={(e)=> setName(e.target.value)}

          />
        </div>
        <div className="form-group mt-3">
          <label>Kelas</label>
          <input
            type="text"
            className="form-control mt-1"
            placeholder="Kelas"
            value={kelas}
            onChange={(e)=> setKelas(e.target.value)}
            
          />
        </div>
        <div className="form-group mt-3">
          <label>Hafalan</label>
          <input
            type="text"
            className="form-control mt-1"
            placeholder="Hafalan"
            value={hafalan}
            onChange={(e)=>setHafalan(e.target.value)}
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

export default Edit
