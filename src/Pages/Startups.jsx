import React from 'react'
import Footer from './Footer'
import './StartupStyles.css'
import {Link} from 'react-router-dom'
import Logo from '../assets/images/KAWO_Logo (1).png'
import ThinkLg from '../assets/images/think&zoom-logo.png'
import slateC from '../assets/images/slatecube.png'
import sleek from '../assets/images/sleekjob.png'

function Startups() {
  return (
<>
<nav id="try" className= "navbar navbar-expand-lg navbar-home" 
      style={{backgroundColor: "#360207!important",
      border: "none",
      borderRadius: "0px"}}>
          <div class="container-fluid">
            <a className="navbar-brand" href="/">
                <Link to='/'><img src={Logo} alt="" className="img-fluid"/></Link></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbar-home">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end"id="navbar-home">
            <ul className="navbar-nav">
                <li className="nav-item">
                 <Link to='/'><a className="nav-link Home" aria-current="page" href="/">Home</a></Link> 
                </li>
                <li className="nav-item">
                <Link to='/startups'><a className="nav-link" href="/">Startups</a></Link>
                </li>
                <li className="nav-item">
                  <Link to='/register'><a className="nav-link" href="/">Register</a></Link>
                </li>
                <li className="nav-item">
                <Link to='/login'><a className="nav-link" href="/">Login</a></Link>
                </li>
                </ul>
            </div> 
          </div>
          </nav>

<div className="container">
        <br/>
    <input type="search" className="some-search" value="" placeholder="Search startups by name or industry"/>
    <span><button type="submit" className="button-search"><i className="fa fa-search"></i> Search</button></span>   
  </div>
      <br/>
      <div className="container">
          <div className="row mb-5 col-10">
              <div className="col-md-1"><img src={ThinkLg} alt="" /></div>
              <div className="col-md-10">
                  <h4>Think and Zoom</h4>
                  <p>Providing solutions for the visually impaired, such as mind-controlled zooming and wearable connected zooming</p>
                  <button type="button" className="btn btn-outline-primary">See full details</button>
                </div>
          </div>
          <div className="row mb-5 col-10">
            <div className="col-md-1"><img src={slateC} alt="" /></div>
            <div className="col-md-10">
                <h4>Slatecube</h4>
                <p>Slatecube helps job seekers develop job-relevant skills, gain work experience, and land well paying jobs through world-className up-skilling courses and virtual internships</p>
                <button type="button" className="btn btn-outline-primary">See full details</button>
              </div>
              </div>

              <div className="row mb-5 col-10">
                <div className="col-md-1"><img src={sleek} alt="" /></div>
                <div className="col-md-10">
                    <h4>Sleekjob Academy</h4>
                    <p>Trains world class software developers in Ghana and matches them to employment opportunities</p>
                    <button type="button" className="btn btn-outline-primary">See full details</button>
                  </div>
            </div>
        </div>
<Footer/>
</>
    
  )
}

export default Startups