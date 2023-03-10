import React, { useEffect, useState} from 'react'
import Navigation from '../components/Navigation'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import url from '../features/url'


function Beranda() {
  const [nama_guru, setnamaguru] = useState([]);
  useEffect(() => {
    getuser();
  }, [])

  const getuser = async () => {
    const response = await axios.get(`${url}/users/beranda`)
    response.data.shift()
    setnamaguru(response.data)
  }
  if (!nama_guru){
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div>
      <Navigation />
      <div className='card'>
        <Row xs={2} md={3} xl={4} className="g-4">

          {nama_guru.map((guru) => (
            <Col key={guru.uuid}>

              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>{guru.nama_lengkap}</Card.Title>
                  {/* <Card.Subtitle className="mb-2 text-left">Lorem ipsum dolor sit amet.</Card.Subtitle> */}
                  <Card.Text>
                    Kategori 5 Juz Kelas 9
                  </Card.Text>
                  <Link to={`/view/${guru.id}`}>
                    <Button variant="primary">Lihat Detail</Button>{' '}
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}

        </Row>
      </div>
    </div>
  )
}

export default Beranda
