import React, { useEffect, useState} from 'react'
import Navigation from '../components/Navigation'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import * as dayjs from 'dayjs';
import updateLocale from "dayjs/plugin/updateLocale";


function ListWali() {
  const [siswa, setSiswa] = useState([]);
  const { id } = useParams();
  const [nama_guru,setnamaguru] = useState("")




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

  // useeffect merender fungsi

  useEffect(() => {
    getSiswa()
    
  }, [])


  const getSiswa = async () => {
    const response = await axios.get(`https://halaqoh2.my.id/guru/siswa/${id}`)
    setSiswa(response.data)
    setnamaguru(response.data[0].user.name)


  }



    return (
      <div>
        <Navigation />
        <div className='tabel'>
          <h2>{nama_guru}</h2>
          <Table bordered responsive="sm">
            <thead className='tabel_head'>
              <tr>
                <th>NO</th>
                <th>Nama</th>
                <th>Kelas</th>
                <th>Guru</th>
                <th colSpan={2}>Hafalan Terakhir</th>
                <th>Update Terakhir</th>
              </tr>
            </thead>
            <tbody>
              {siswa.map((siswa1, index) => (
                <tr key={siswa1.uuid}>
                  <td>{index + 1}</td>
                  <td><Link to={`/siswa/${siswa1.id}`}>{siswa1.name}</Link></td>
                  <td>{siswa1.kelas}</td>
                  <td>{siswa1.user.name}</td>
                  <td>{siswa1.hafalan}</td>
                  <td>{siswa1.ayat}</td>
                  <td>{dayjs(siswa1.updatedAt).format('dddd,DD/MMMM/YYYY')}</td>
                </tr>
              ))}


            </tbody>
          </Table>
        </div>
      </div>
    )
  }
export default ListWali
