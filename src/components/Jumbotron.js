import React from 'react'
import Button from 'react-bootstrap/Button';
import { FiLogIn } from 'react-icons/fi';

function Jumbotron() {
  return (
    <div>
      <div class="jumbotron">
        <img src={process.env.PUBLIC_URL + '/images/jumbo.jpg'} alt="" />
        <p class="selamat_datang">Selamat Datang Di Al-Fityan Kubu Raya</p>
        <p class="judul2">Sekolah Boarding Terbaik Kalimantan Barat</p>
        <div className='button'>
          <Button color='#3282F6' href='/login' size="lg" active className='rounded-pill'><FiLogIn/>
            Login
          </Button>
          <Button variant="success" size="lg" href='/beranda' active className='tombol_orangtua rounded-pill'>
            Laman Orang Tua
          </Button>
        </div>
      </div>
      </div>
  )
}


export default Jumbotron
