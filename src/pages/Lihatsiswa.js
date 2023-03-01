import axios from 'axios';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { FiEdit2,FiDelete } from 'react-icons/fi';
import { Link} from 'react-router-dom';
import updateLocale from "dayjs/plugin/updateLocale";
import Layout from '../components/Layout';
import swal from 'sweetalert';
import url from '../features/url';

function Lihatsiswa() {
    const [siswa,setSiswa] = useState([]);
    const [cari,setCari] = useState("");
    


    
    useEffect(()=>{
      getSiswa()
      
    },[cari])

    const getSiswa = async()=>{
      const response = await axios.get(`${url}/siswa?search_query=${cari}`)
      setSiswa(response?.data)
      
      
  }

    
    const deleteSiswa = async(uuid)=>{
        swal({
          title: "Menghapus Data",
          text: "Apakah Kamu Yakin Akan Menghapus Data",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then(async(willDelete) => {
          if (willDelete) {
            await axios.delete(`hhttps://halaqoh2.my.id/siswa/${uuid}`)
            swal("Data Berhasil Dihapus", {
              icon: "success",
            });
            getSiswa();
          }
        });
        
    }
     // format waktu untuk indonesia
  dayjs.extend(updateLocale)

  dayjs.updateLocale('en', {
    weekdays: [
      "Ahad", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"
    ],
    months: [
      "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli",
      "Agustus", "September", "Oktober", "November", "Desember"
    ]
  })
  return (
    <Layout>
        <div className='tabel'>
            <label>Cari Siswa</label>
            <input
            type="search"
            className="form-control mt-1"
            placeholder="Masukkan Nama Siswa"
            onChange={(e) => setCari(e.target.value)}
            value={cari}
          />
          <br></br>
          {siswa.length === 0 && (
        <h2>Data Tidak Ditemukan</h2>
      )}
      <Table bordered>
      <thead>
        <tr>
          <th>NO</th>
          <th>Nama</th>
          <th>Kelas</th>
          <th>Guru</th>
          <th>Hafalan</th>
          <th>Update Terakhir</th>
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
            <td>{dayjs(siswa1.updatedAt).format('dddd,DD/MMMM/YYYY')}</td>
            <td> 
              <Link to={`/dashboard/edit/${siswa1.uuid}`}><Button variant="primary"><FiEdit2/>Edit</Button></Link>
               | <Link><Button variant="danger" onClick={()=>deleteSiswa(siswa1.uuid)}><FiDelete/>Delete</Button></Link>
              </td>
          </tr>
        ))}
          
        
      </tbody>
    </Table>
    </div>
    </Layout>
  )
}

export default Lihatsiswa
