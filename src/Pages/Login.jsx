import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../assets/images/KAWO_Logo (1).png'
// import { useNavigate } from 'react-router-dom'
function Login() {
  // let navigate = useNavigate();
  return (
    <div>
    
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
                <Link to='/startups'><a className="nav-link" href="/">Startups</a></Link>
                </li>
                <li className="nav-item">
                  <Link to='/register'><a className="nav-link" href="/">Register</a></Link>
                </li>
                <li className="nav-item">
                <Link to='/login' className="nav-link">Login</Link>
                </li>
                </ul>
            </div> 
          </div>
          </nav> 
  
  <div className="container">
    <h3 style={{"margin-top":"3rem","margin-bottom":"3rem"}}>Already a Member? Login to add your Startup</h3>
    <form>
      <div className="form-group">
        <label htmlFor="exampleInputName">Email address</label>
        <input type="text" className="form-control" id="exampleInputEmail" placeholder="Email address" />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputName">Password</label>
        <input type="text" className="form-control" id="exampleInputEmail" placeholder="Password" />
      </div>
      <button type="submit" className="btn btn-primary">Sign In</button>
    </form>
  </div>
  <footer className="d-flex py-3 px-5" style={{"position":"fixed","left":"0","bottom":"0","width":"100%"}}>
    <p>© 2021 KawoLegal. All Rights Reserved</p>
    <ul className=" social-icons ml-auto d-flex">
      <li><span className=" fa fa-facebook"> </span> </li>
      <li><span className="fa fa-twitter" /></li>
      <li><span className="fa fa-linkedin" /></li>
      <li><span className="fa fa-instagram" /></li>
    </ul>
  </footer>
</div>
  )
}

export default Login