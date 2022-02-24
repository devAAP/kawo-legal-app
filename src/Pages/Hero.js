import React from 'react'
import {useNavigate} from 'react-router-dom'
import "./HeroStyle.css"

 const Hero = () => {
  let navigate = useNavigate();
    return (
    <div className="home-image" >
      <div class="overlay"></div>
      <div class="kawo-text">
      <h3>KAWO LEGAL</h3>
      <p>A collaborative Ecosystem for Problem Solvers and Support for Startups</p>
      <a className="btn btn-primary btn-lg" href="/register" role="button" onclick={()=>{navigate ("/register");}}>Register Now!</a>
      </div>
     
       
        </div>
        
  )
}

export default Hero;
