import React from 'react';
import Journey from "../GeneralisedComponents/Journey";
import m3 from "../GeneralisedImage/M3 shop.png";
import Bkg from "../GeneralisedImage/background.png";
import "./../../App.css";
import { useNavigate } from "react-router-dom";


const BatteriesInverters = () => {
    // console.log("hey yooo4");
    let navigate = useNavigate();



    return(
        <div className="pb-4">
      <img
        className="bg-image"
        alt="..."
        src={Bkg}
        style={{ height: "auto", width: "100%" }}
      ></img>
      <Journey />

      <div className="row-md-12 p-5 bg">
        <div className="col">
          <img src={m3} style={{ height: "100px", width: "100px" }} />
        </div>
        <div className="col">
            <h2>Journey 3 <br/> Dummy Journey <br/> Batteries and Inverters </h2>
            If you are building a new independent home or a villa that you've always dreamt of, you've come to the right place. Give your home a touch of sustainability, starting with Solar Powered Clean Energy Solutions. In this journey, we've highlighted how you can use a Simple Solar Water Heater and a Solar Powered Rooftop PV System AC Module
        </div>
        <div className="col">
            <div className="row p-2">
                <div className="col"><input type="radio"></input>Journey 3</div>
                
                
            </div>
            <div className="row p-2">
                <div className="col"><input type="text" placeholder="Monthly Bill"></input></div>
                <div className="col"><input type="text" placeholder="Number of people in house"></input></div>
                <div className="col"></div>
            </div>
            <div className="row p-2">
                <div className="col"><input type="text" placeholder="Address"></input></div>
                <div className="col"><input type="text" placeholder="State"></input></div>
                <div className="col"></div>
            </div>
            <div className="row p-2">
                <div className="col"></div>
                <div className="col"><button onClick={()=>{navigate("/")}}>Next</button></div>
                <div className="col"></div>
            </div>
            


        </div>
      </div>
    </div>
    )
}

export default BatteriesInverters;