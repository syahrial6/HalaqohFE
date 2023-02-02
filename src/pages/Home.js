import React from 'react'
import Footer from '../components/Footer'
import Jumbotron from '../components/Jumbotron'
import Navigation from '../components/Navigation'

function Home() {
    return (

        <div>
            <Navigation />
            <Jumbotron />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,0L20,26.7C40,53,80,107,120,138.7C160,171,200,181,240,176C280,171,320,149,360,149.3C400,149,440,171,480,186.7C520,203,560,213,600,229.3C640,245,680,267,720,272C760,277,800,267,840,234.7C880,203,920,149,960,128C1000,107,1040,117,1080,122.7C1120,128,1160,128,1200,138.7C1240,149,1280,171,1320,176C1360,181,1400,171,1420,165.3L1440,160L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path></svg>
            <p className="program_unggulan">3 Program Unggulan</p>
            <div className="induk_unggul">
                <div className="icon">
                    <img src={process.env.PUBLIC_URL + '/images/translation.png'} alt="" />
                    <p>Bahasa</p>
                </div>
                <div className="icon">
                    <img src={process.env.PUBLIC_URL + '/images/koran.png'} alt="" />
                    <p>Al-Qur'an</p>

                </div>
                <div className="icon">
                    <img src={process.env.PUBLIC_URL + '/images/atom.png'} alt="" />
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
        <Footer/>
        </div>
    )
}

export default Home
