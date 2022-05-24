import React from 'react';
import Bkg from '../GeneralisedImage/background.png';
 
export default function About(){

    return(
        <div>
            <img className="bg-image" alt='...' src={Bkg} style={{height:'auto',width:'100%'}}></img>

            <h4>Hello Pranav this is about page</h4>
            
        </div>
    )
}
