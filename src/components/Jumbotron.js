import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';


function Jumbotron() {
  return (
    <div>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + '/images/_MG_3538.JPG'}
          alt="First slide"
        />
      </Carousel.Item>
      <div className="mb-2">
        <Button variant="secondary" size="lg">
          <Link to={"/login"}>
          <FiLogIn/>Login
          </Link>
        </Button>{' '}
        <Button variant="secondary" size="lg">
        <Link to={"/beranda"}>Lihat Hafalan
        </Link>
        </Button>
      </div>
    </Carousel>
    </div>
  )
}


export default Jumbotron
