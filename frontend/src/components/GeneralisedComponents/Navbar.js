import React from "react";
import Logo from "./../GeneralisedImage/logo.png";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  let navigate = useNavigate();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {/* <a className="navbar-brand" onClick={()=>{navigate("/")}}> */}
            <img
              src={Logo}
              alt="..."
              style={{ height: "50px", width: "50px" }}
              onClick={()=>{navigate("/")}}
            ></img>
          {/* </a> */}
          {/* <a className="navbar-brand" onClick={()=>{navigate("/")}}> */}
            <p onClick={()=>{navigate("/")}}>Solar Companion</p>
          {/* </a> */}

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item p-4" >
                <p onClick={()=>{navigate("/home")}}>Home</p>
              </li>
              <li className="nav-item p-4" >
                <p onClick={()=>{navigate("/about")}}>About</p>
              </li>
              <li className="nav-item p-4" >
                <p onClick={()=>{navigate("/blogs")}}>Blog</p>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
