import React, { useEffect, useRef, useState } from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import dayjs from 'dayjs';
import { Link, useParams } from 'react-router-dom';










const Detail = React.forwardRef((props, ref) => {
  const { id } = useParams();
  const [siswa, setSiswa] = useState([])
  const [nama_siswa, setNamaSiswa] = useState([])


  useEffect(() => {
    getHistory()
  }, [])


  const getHistory = async () => {
    const response = await axios.get(`https://halaqoh2.my.id/history/siswa/${id}`);
    console.log(response.data)
    setSiswa(response.data)
    setNamaSiswa(response.data[0])



  }
  if (!nama_siswa) {
    return <h1>Data Tidak Ada</h1>;
  }

  return (
    <div ref={ref}>
      <h2>Nama :{nama_siswa.name}</h2>
      <h2>Kelas :{nama_siswa.kelas}</h2>
      <h3>Total :{siswa.length}</h3>
      <div className='tabel'>
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
                <td>{dayjs(siswa1.updatedAt).format('dddd,DD/MMMM/YYYY HH:mm')}</td>
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
