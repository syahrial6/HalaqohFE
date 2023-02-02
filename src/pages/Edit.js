import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getMe } from '../features/AuthSlices';
import Select from 'react-select'
import swal from 'sweetalert';

function Edit() {
    const [name,setName] = useState("");
  const [kelas,setKelas] = useState("");
  const [hafalan,setHafalan] = useState("");
  const [ayat,setAyat] = useState("");
  const [pesan,setPesan] = useState("");
  const {uuid} = useParams();
  const [searchsurah,setSearchsurah] = useState([])

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isError} = useSelector(((state)=> state.auth));
    const {user} = useSelector(((state)=> state.auth));

    useEffect(()=>{
        dispatch(getMe());
        getsiswabyid();
        getsurah();
        
        
    },[dispatch])

    const getsiswabyid = async()=>{
      try {
          const response = await axios.get(`http://localhost:5000/siswa/${uuid}`)
          setName(response.data.name)
          setKelas(response.data.kelas)
          setHafalan(response.data.hafalan)
          setAyat(response.data.ayat)
          
      } catch (error) {
          setPesan(error.response.data.msg);
      }
  }


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
            hafalan : hafalan,
            ayat: ayat
          })
          swal({
            title: "Berhasil",
            text: `Data ${name} Diperbarui`,
            icon: "success",
            button: "OK",
          });
          navigate(`/dashboard/${uuid}`)
        } catch (error) {
          if (error.response){
            setPesan(error.response.data.msg);
          }
        }
      }

      const getsurah = async()=>{
        const response = await axios.get("http://localhost:5000/surah")
        let result = response.data.map(data1=>{
          return {
            value : data1.nama_surah,
            label : data1.nama_surah
          }
        })
        setSearchsurah(result)
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
          <Select options={searchsurah}
          defaultValue={hafalan}
          onChange={(e)=>setHafalan(e.value)}/>
          <span>
          <input
            type="text"
            className="form-control mt-1"
            placeholder="Ayat"
            value={ayat}
            onChange={(e)=> setAyat(e.target.value)}
          />
          </span>
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
