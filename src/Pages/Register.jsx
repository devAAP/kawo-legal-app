import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../assets/images/KAWO_Logo (1).png' 
import Footer from './Footer'
function Register() {
  return (
    <>
    <nav className= "navbar navbar-expand-lg navbar-home" 
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
                <Link to='/'><a className="nav-link" href="/">Startups</a></Link>
                </li>
                <li className="nav-item">
                  <Link to='/'><a className="nav-link" href="/">Register</a></Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Login</a>
                </li>
                </ul>
            </div> 
          </div>
          </nav>
    <div className="container">
        <h3 style={{margintop:"3rem", marginbottom: "3rem"}}>Join KawoLegal. Sign up to get your startup listed now!</h3>
        <form>
            <div className="form-group">
                <label for="exampleInputName">Full Name</label>
                <input type="text" className="form-control" id="exampleInputEmail" placeholder="Full Name"/>
            </div>
            <div className="form-group">
                <label for="exampleInputName">Email address</label>
                <input type="text" className="form-control" id="exampleInputEmail" placeholder="Email address"/>
            </div>
            <div className="form-group">
                <label for="exampleInputName">Password</label>
                <input type="text" className="form-control" id="exampleInputEmail" placeholder="Password"/>
            </div>
            <div className="form-group">
                <label for="exampleInputName">Confirm Password</label>
                <input type="text" className="form-control" id="exampleInputEmail" placeholder="Confirm Password"/>
            </div>
            <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>
    </div>
    <Footer/>
    </>
    
  )
}

export default Register