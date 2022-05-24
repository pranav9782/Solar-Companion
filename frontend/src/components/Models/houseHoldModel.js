import React, { useState } from "react";
import Journey from "../GeneralisedComponents/Journey";
import m1 from "../GeneralisedImage/m1 household.png";
import Bkg from "../GeneralisedImage/background.png";
import s1 from "../GeneralisedImage/SolarPanel.png";
import "./../../App.css";
import Result from "./houseHoldModelvalue";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

const url = "http://127.0.0.1:8000/api/address/";
const url1 = "http://127.0.0.1:8000/api/callback/";
const HouseHoldModel = () => {
  // let navigate = useNavigate();
  const [locadd, setlocadd] = useState([]);
  const [bill, setbill] = useState([]);
  const [states, setstates] = useState([]);
  const [nopih, setnopih] = useState([]);
  const [resultView, setResultView] = useState(true);

  const handlesendlocadd = () => {
    setResultView(!resultView);
    const data = {
      address: `${locadd}`,
      monthlybill: `${bill}`,
      nopih: `${nopih}`,
      states: `${states}`,
      author: `Pranav`,
    };
    axios
      .post(url, data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  let unit = bill / 7.8;
  let kw = unit / 100;
  let finalkw = kw.toFixed(2);
  console.log(finalkw);

  const [name, setname] = useState([]);
  const [email, setemail] = useState([]);
  const [phnumber1, setphnumber1] = useState([]);
  const handlesendcallbackadd = () => {
    const data = {
      name: `${name}`,
      emailid: `${email}`,
      phonenumber: `${phnumber1}`,
      recKw: `${finalkw}`,
      author: `Pranav`,
    };
    axios
      .post(url1, data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  // useEffect(()=>{handlesendlocadd();},[]);

  return (
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
          <img src={m1} style={{ height: "100px", width: "100px" }} />
        </div>
        <div className="col">
          <h2>
            Journey 1 <br />
            Synergize Your Home
          </h2>
          If you are building a new independent home or a villa that you've
          always dreamt of, you've come to the right place. Give your home a
          touch of sustainability, starting with Solar Powered Clean Energy
          Solutions. In this journey, we've highlighted how you can use a Simple
          Solar Water Heater and a Solar Powered Rooftop PV System AC Module
        </div>

        <div className="row p-2">
          <div className="col">
            <input type="radio"></input>Journey 1
          </div>
        </div>
        <div className="row p-2">
          <div className="col">
            <input
              type="text"
              placeholder="Monthly Bill"
              name="bill"
              onChange={(e) => setbill(e.target.value)}
            ></input>
          </div>
          <div className="col">
            <input
              type="text"
              placeholder="Number of people in house"
              name="nopih"
              onChange={(e) => setnopih(e.target.value)}
            ></input>
          </div>
          <div className="col"></div>
        </div>
        <div className="row p-2">
          <div className="col">
            <input
              type="text"
              placeholder="Address"
              name="address"
              onChange={(e) => setlocadd(e.target.value)}
            ></input>
          </div>
          <div className="col">
            <input
              type="text"
              placeholder="State"
              name="state"
              onChange={(e) => setstates(e.target.value)}
            ></input>
          </div>
          <div className="col"></div>
        </div>
        <div className="row p-2">
          <div className="col"></div>
          <div className="col">
            <button onClick={handlesendlocadd}>Next</button>
          </div>
          <div className="col"></div>
        </div>
        <div className={resultView ? "invisible" : "visible"}>
          <div className="container pt-5">
            <div className="row">
              <div className="col col-md-4">
                <img
                  className="s1-image"
                  alt="..."
                  src={s1}
                  style={{ height: "auto", width: "40%" }}
                ></img>
              </div>
              <div className="col">
                <Result bill={finalkw} />
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Get a Call BACK
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Contact Information
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="mb-3">
                      <label class="form-label">Name</label>
                      <input type="text" class="form-control" 
                      name="name"
                      onChange={(e) => setname(e.target.value)}/>
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Email</label>
                      <input type="email" class="form-control" name="email"
              onChange={(e) => setemail(e.target.value)}/>
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Phone Number</label>
                      <input type="text" class="form-control" name="phnumber"
              onChange={(e) => setphnumber1(e.target.value)}/>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-primary" onClick={handlesendcallbackadd}>
                    Call Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col"></div>
      </div>
    </div>
  );
};

export default HouseHoldModel;
