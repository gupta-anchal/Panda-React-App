import React from 'react'
import {
  Link
} from "react-router-dom";
import { useSelector } from 'react-redux';
import '../../styles/navbar.css'

export default function NavBar() {
  const Animal = useSelector((state) => state.animal.value)

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="image/zoo.jpeg" alt="logo" width="100px"/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/parent"><b>{Animal}</b></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/animal"><b>Change Animal</b></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about"><b>About {Animal}</b></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
