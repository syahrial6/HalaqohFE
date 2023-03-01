import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { FiEdit2, FiDelete, FiRewind, FiLogOut, FiPlusSquare } from 'react-icons/fi';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { getMe, Logout, reset } from '../features/AuthSlices';
import axios from 'axios';
import Navigation2 from '../components/Navigation2';
import * as dayjs from 'dayjs';
import updateLocale from "dayjs/plugin/updateLocale";
import swal from 'sweetalert';
import url from '../features/url';


function Guru() {
  const [siswa, setSiswa] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector(((state) => state.auth));
  const { id } = useParams();


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

  useEffect(() => {
    getSiswa()
    dispatch(getMe());

  }, [dispatch])
  useEffect(() => {
    if (isError) {
      navigate("/login")
    }
  }, [isError, navigate])


  const getSiswa = async () => {
    const response = await axios.get(`${url}/guru/siswa/${id}`)
    setSiswa(response.data)
  }
  
  const logout = () => {
    dispatch(Logout())
    dispatch(reset());
    navigate("/")
  }
  return (
    <div>
      <Navigation2 />
      <div className='tabel'>
        <h2>Halo.... {user && user.name}</h2>
        {user && user.role === "admin" && (
          <Link to={'/dashboard'}><Button variant="success"><FiRewind />Kembali ke Dashboard</Button></Link>
        )}
        <Table bordered>
          <thead className='tabel_head'>
            <tr>
              <th>NO</th>
              <th>Nama</th>
              <th>Kelas</th>
              <th>Guru</th>
              <th colSpan={2}>Hafalan</th>
              <th>Update Terakhir</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {siswa.map((siswa1, index) => (
              <tr key={siswa1.uuid}>
                <td>{index + 1}</td>
                <td><Link to={`/siswa/${siswa1.id}/cetak`}>{siswa1.name}</Link></td>
                <td>{siswa1.kelas}</td>
                <td>{siswa1.user.name}</td>
                <td>{siswa1.hafalan}</td>
                <td>{siswa1.ayat}</td>
                <td>{dayjs(siswa1.updatedAt).format('dddd,DD/MMMM/YYYY')}</td>
                <td>
                  <Link to={`/dashboard/edit/${siswa1.uuid}`}><Button variant="primary"><FiEdit2 />Edit</Button></Link>
                </td>
              </tr>
            ))}


          </tbody>
        </Table>
        <Button variant='danger'><a onClick={logout}><FiLogOut />Logout</a></Button>
      </div>
    </div>
  )
}

export default Guru
