import React from 'react';
import '../../../styles/nav.css';

const NavComponent = () => {
  return (
    <nav className="navbar navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
    <div className="container d-flex align-items-stretch">
        <div className="col-3 d-flex align-items-center">
          <a className="navbar-brand" href="index.html">Spring<span>Church</span></a>
        </div>
        <div className="col-9 d-flex align-items-center text-right">
          <ul className="ftco-social mt-2 mr-3">
            <li className="ftco-animate"><a href="#"><span className="icon-twitter"></span></a></li>
            <li className="ftco-animate"><a href="#"><span className="icon-facebook"></span></a></li>
            <li className="ftco-animate"><a href="#"><span className="icon-instagram"></span></a></li>
          </ul>

          <button className="navbar-toggler d-flex align-items-center" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="pt-1 mr-1">VENTAS</span>
          </button>
        </div>


      <div className="collapse navbar-collapse" id="ftco-nav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active"><a className="nav-link">VEHICULOS</a></li>
          <li className="nav-item"><a className="nav-link">CELULARES</a></li>
          <li className="nav-item"><a className="nav-link">VIDEOJUEGOS</a></li>
          <li className="nav-item"><a className="nav-link">PROPIEDADES</a></li>
          <li className="nav-item"><a className="nav-link">ACCESORIOS</a></li>
          <li className="nav-item"><a className="nav-link">SALUD</a></li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default NavComponent;
