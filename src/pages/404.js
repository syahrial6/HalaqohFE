import React from 'react'
import { useNavigate } from 'react-router-dom';

function Notfound() {
    const navigate = useNavigate();
  return (
    <div>
      <div class="text-center">
                <h1 class="display-1 fw-bold">404</h1>
                <p class="fs-3"> <span class="text-danger">Opps!</span> Page not found.</p>
                <p class="lead">
                    The page you’re looking for doesn’t exist.
                  </p>
                <a onClick={()=> navigate(-1)} class="btn btn-primary">Go Home</a>
            </div>
    </div>
  )
}

export default Notfound;