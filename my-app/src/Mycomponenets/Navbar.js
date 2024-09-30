import React from 'react';
import './Nabarstyles.css'
import { Menuitems } from './Menuitems';
import { Link } from 'react-router-dom';
function Navbar(){
    return(

        <nav className="navbar navbar-expand-lg bg-body fixed-top py-2">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Trippy</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"><i class="fa fa-reorder  khan"></i></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto ">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/"><i class="fa fa-home"></i>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about"><i class="fa fa-info-circle"></i>About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/services"><i class="fa fa-shopping-bag"></i>Service</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact"><i class="fa fa-address-book"></i>Contact</a>
        </li>
        <form class="d-flex" role="search">
        {/* <button class="btn btn-outline-info mx-4 px-4" type="submit">Login</button> */}
        <button type="button" class="btn btn-light px-4" ><a href="/Signup" className='awais'>Sign Up</a></button>
      </form>
        
      </ul>
      
    </div>
  </div>
</nav>
    )
}

export default Navbar;





