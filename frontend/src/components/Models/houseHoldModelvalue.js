import React, { useState } from 'react';
import Bkg from '../GeneralisedImage/background.png';

const Result = (props)=> {
    
    // console.log(props,"ttttttttttttttttt");

    return (
        <>
            {/* <img className="bg-image" alt='...' src={Bkg} style={{height:'auto',width:'100%'}}></img> */}
             <div><h5>{props.bill}KW System REC Panels & Enphase Microinverter</h5></div>

    </>
    )
}

export default Result;