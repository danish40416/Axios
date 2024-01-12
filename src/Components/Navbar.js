import React from 'react'
import {Image} from 'react-bootstrap';

export default function Navbar() {
  return (
    <div>
        <div className="navbar">
        <div className="d-flex justify-content-start">
          <Image src={require('../images/logo.png')} className="logo ms-3 mt-2" alt="Logo" />
        </div>
      </div>
    </div>
  )
}
