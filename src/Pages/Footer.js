import React from 'react'

export const Footer = () => {
  return (
    <>
    <footer className="d-flex py-3 px-5" style={{"position":"fixed","left":"0","bottom":"0","width":"100%"}}>
    <p>© 2021 KawoLegal. All Rights Reserved</p>
    <ul className=" social-icons ml-auto d-flex">
      <li><span className=" fa fa-facebook"> </span> </li>
      <li><span className="fa fa-twitter" /></li>
      <li><span className="fa fa-linkedin" /></li>
      <li><span className="fa fa-instagram" /></li>
    </ul>
  </footer>
    {/* <div>
  <footer classname="d-flex py-3 px-5" style={{"position":"fixed","left":"0","bottom":"0","width":"100%"}}>
    <p>© 2021 KawoLegal. All Rights Reserved</p>
    <ul classname=" social-icons ml-auto d-flex">
      <li><span classname=" fa fa-facebook"> </span> </li>
      <li><span classname="fa fa-twitter" /></li>
      <li><span classname="fa fa-linkedin" /></li>
      <li><span classname="fa fa-instagram" /></li>
    </ul>
  </footer>
</div> */}
    </>
  )
}

export default Footer;