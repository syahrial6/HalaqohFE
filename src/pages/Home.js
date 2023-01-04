import React from 'react'
import Jumbotron from '../components/Jumbotron'
import Navigation from '../components/Navigation'

function Home() {
  return (
    
    <div>
        <Navigation/>
        <Jumbotron/>
       <p className="program_unggulan">3 Program Unggulan</p>
                <div className="induk_unggul">
                    <div className="icon">
                        <img src={process.env.PUBLIC_URL + '/images/translation.png'} alt=""/>
                        <p>Bahasa</p>
                    </div>
                    <div className="icon">
                        <img src={process.env.PUBLIC_URL + '/images/koran.png'} alt=""/>
                        <p>Al-Qur'an</p>

                    </div>
                    <div className="icon">
                        <img src={process.env.PUBLIC_URL + '/images/atom.png'} alt=""/>
                        <p>Sains</p>

                    </div>

                </div>
                <div className="tentang_kami" id="tentangkami">
                    <p className="judul">Tentang Kami</p>
                    <p className="paragraph">
                        Al-Fityan School Kubu Raya Adalah Sekolah Boarding Terbaik yang Ada di Kalimantan Barat.Alfityan School Kuburaya Memadukan konsep kurikulum islami dan nasional demi menghasilkan SDM yang baik akhlaknya maupun ilmunya.Yayasan Al Fityan Indonesia memiliki
                        6 cabang yang tersebar di seluruh wilayah Indonesia, dan Al-Fityan Kubu Raya merupakan cabang yang ke 5 berdiri pada tahun 2013
                    </p>
                </div>
                <div className="visi">
                    <p className="judul">Visi</p>
                    <p className="teks_visi">“Membangun generasi yang beriman, menguasasi ilmu pengetahuan dan mampu menghadapi tantangan zaman”.</p>
                </div>
                <div className="misi">
                    <p className="judul">Misi</p>
                    <ul>
                        <li>“Menyiapkan lingkungan pendidikan yang baik dan terintegrasi bagi peserta didik, melalui pengelolaan pendidikan unggul dan kompetensi tenaga pendidik yang sesuai dengan standar mutu pendidikan, untuk mewujudkan misi pembangunan
                            manusia”.
                        </li>
                    </ul>
                </div>
    
    </div>
  )
}

export default Home
