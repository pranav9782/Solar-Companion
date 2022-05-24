import React from 'react';
import m1 from "./../GeneralisedImage/m1 household.png";
import m3 from "./../GeneralisedImage/M3 shop.png";
import m2 from "./../GeneralisedImage/m2 .png";
import "./../../App.css";
import { useNavigate } from "react-router-dom";


export default function Journey(){

    let navigate = useNavigate();
    
    return (
        <div>     
            <div className="row p-5 colgap "> 
            <h5> Choose your Solar Journey</h5>
                <div className="card col cardshadow" onClick={()=>{navigate("/journey1")}}>
                    {/* M1-Household */}
                    <div className="row p-2">
                        <div className="col">
                        <img src={m1} style={{height:"100px",width:"100px"}} className="card-img-top" alt="..." />
                        </div>
                        <div className="col card-title">Synergize Your Home</div>
                        <div className="col"><p className="right"></p></div>
                    </div>                      
                </div>

                {/* M2-card */}
                <div className="card col cardshadow" onClick={()=>{navigate("/journey2")}}>
                    <div className="row p-2">
                        <div className="col">
                        <img src={m2} style={{height:"100px",width:"100px"}} className="card-img-top" alt="..." />
                        </div>
                        <div className="col card-title">Solar Power Backup</div>
                        <div className="col"><p className="right"></p></div>
                    </div>                      
                </div>

                {/* M3-Shop */}
                <div className="card col cardshadow" onClick={()=>{navigate("/journey3")}}>
                    <div className="row p-2">
                        <div className="col">
                        <img src={m3} style={{height:"100px",width:"100px"}} className="card-img-top" alt="..." />
                        </div>
                        <div className="col card-title"> Batteries and Inverters</div>
                        <div className="col"><p className="right"></p></div>
                    </div>                      
                </div>
                

                
               
            </div>
        </div>
    )
}