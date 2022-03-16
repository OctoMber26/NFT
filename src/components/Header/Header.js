import React,{Fragment} from "react";
import "./Header.css";
import logo from "../images/Logo.png";
import arrow from "../images/Arrow Icon.svg";
import menu from "../images/Menu icon.svg";

const Header=()=>{
    return(
        <Fragment>
 <nav className="navbar navbar-expand-lg mt-4 mx-4 mt-sm-5">
  <div className="container">
    <img className="logo img-fluid" src={logo} />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"> <img className="menu img-fluid" src={menu} /></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link" aria-current="page" href="#">Make</a>
        <a className="nav-link" href="#">Comunity</a>
        <a className="nav-link" href="#">About Us</a>
        <a className="nav-link">Blog</a>
      </div>
      <span className="purchesing d-flex">
      <img className="arrow" src={arrow} />
      <h5 className="wallet">Connect Wallet</h5>
    </span>
    </div>
  </div>
</nav>
        </Fragment>
    )
}

export default Header;