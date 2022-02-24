import React from 'react'
import Background from '../assets/images/pexels-fauxels-3184634.jpg';
import Logo from '../assets/images/KAWO_Logo (1).png'
import { Link } from 'react-router-dom';

 const Navbar = () => {
    
  return (
    <>
      
          <div class="home-image" style={{backgroundImage: "url("+Background + ")", 
    backgroundSize: 'cover', height: '100vh'}}>
      <div class="navigate d-flex justify-content-between">
        <div class="navbar-brand">
        <Link to='/'><img src={Logo} alt='' className="img-fluid"/></Link>
        </div>
        <ul class="d-flex">
       <Link to='/Home' className="nav-link" href="/" >Home</Link>
       
        <Link to='/startups' className="nav-link" href="/" >Startups</Link>
        <Link to='/register' className="nav-link" href="/" >Register</Link>
        <Link to='/login' className="nav-link" href="/" >Login</Link>
        </ul>
      </div>
     


      {/* <div class="overlay"></div>
      <div class="kawo-text">
      <h3>KAWO LEGAL</h3>
      <p>A collaborative Ecosystem for Problem Solvers and Support for Startups</p>
      <a className="btn btn-primary btn-lg" href="/register" role="button" onclick={()=>{navigate ("/register");}}>Register Now!</a>
      </div> */}
     
      </div>
    
    
    
    </>
  )
}

export default Navbar;