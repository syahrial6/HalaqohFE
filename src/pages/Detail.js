import React, { useEffect, useRef, useState } from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import * as dayjs from 'dayjs';
import updateLocale from "dayjs/plugin/updateLocale";
import { Link, useParams } from 'react-router-dom';
import url from '../features/url';










const Detail = React.forwardRef((props, ref) => {
  const { id } = useParams();
  const [siswa, setSiswa] = useState([])
  const [nama_siswa, setNamaSiswa] = useState([])


  useEffect(() => {
    getHistory()
  }, [])

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


  const getHistory = async () => {
    const response = await axios.get(`${url}/history/siswa/${id}`);
    console.log(response.data)
    setSiswa(response.data)
    setNamaSiswa(response.data[0])



  }
  if (!nama_siswa) {
    return <h1>Data Tidak Ada</h1>;
  }

  return (
    <div ref={ref}>
      <div className='tabel'>
      <h2>Nama :{nama_siswa.name}</h2>
      <h2>Kelas :{nama_siswa.kelas}</h2>
      <h3>Total :{siswa.length}</h3>
        <Table bordered >
          <thead>
            <tr>
              <th>NO</th>
              <th>Hafalan</th>
              <th>Ayat</th>
              <th>Update Terakhir</th>
            </tr>
          </thead>
          <tbody>
            {siswa.map((siswa1, index) => (
              <tr key={siswa1.uuid}>
                <td>{index + 1}</td>
                <td>{siswa1.hafalan}</td>
                <td>{siswa1.ayat}</td>
                <td>{dayjs(siswa1.updatedAt).format('dddd,DD MMMM YYYY HH:mm')}</td>
              </tr>
            ))}


          </tbody>

        </Table>
      </div>

    </div>
  )

}
)

export default Detail
